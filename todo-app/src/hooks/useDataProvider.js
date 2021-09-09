import {useEffect, useState, useReducer} from 'react';

export const LOADING = 'loading';
export const SUCCESS = 'success';
export const ERROR = 'error';

const dataReducer = (state, action) => {
    const {type, payload} = action;
    switch(type) {
        case LOADING: return {
            ...state,
            statusData: LOADING,
            url: payload.url,
        }
        case SUCCESS: return {
            ...state,
            statusData: SUCCESS,
            data: payload.data,
        }
        case ERROR: return {
            ...state,
            statusData: ERROR,
            error: payload.error,
        }
    }
};

export const useDataProvider = (initialUrl) => {

    const initialState = {
        url: initialUrl,
        statusData: LOADING
    };

    const [state, dispatch] = useReducer(dataReducer, initialState);
    const {
        url,
        statusData,
    } = state;

    useEffect(() => {
        if(statusData === LOADING && url) {
            fetch(url)
            .then(res => res.json())
            .then(data => dispatch({
                type: SUCCESS,
                payload: {
                    data: data
                }
            }))
            .catch(error => dispatch({
                type: ERROR,
                payload: {
                    error: error,
                },
            }));
        }
    }, [url, statusData]);

    const loading = (url) => dispatch({
        type: LOADING,
        payload: {
            url: url,
        },
    });

    const refresh = () => dispatch({
        type: LOADING,
    });

    return [state, loading, refresh];

};