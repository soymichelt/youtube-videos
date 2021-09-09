import {useState} from 'react';

export const useInputField = (defaultValue = null) => {
    const [value, setValue] = useState(defaultValue);
    const onChange = e => setValue(e.target.value);
    const update = (newValue) => setValue(newValue);

    return {
        value,
        onChange,
        update,
    };
};