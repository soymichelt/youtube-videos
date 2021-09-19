import React from 'react';
import {DragDropContext, Droppable} from 'react-beautiful-dnd';
import {TodoList} from './../list/index';

export const TodoSections = ({
    sectionList,
    onDragEnd,
    items,
    loading,
    onComplete,
    onEdit,
    completeId,
}) => {
    return (
        <DragDropContext onDragEnd={(result) => {
            onDragEnd(result);
        }}>
            <div className='todo-sections-container'>
                {sectionList && sectionList.map(section => {
                    return (
                        <Droppable key={section.sectionId} droppableId={`${section.sectionId}`}>
                            {(provided) => (
                                <TodoList
                                    sectionName={section.name}
                                    items={items?.filter(item => {
                                        return String(item.TodoState) === section.sectionId;
                                    })}
                                    loading={loading}
                                    onComplete={onComplete}
                                    onEdit={onEdit}
                                    completeId={completeId}
                                    provided={provided}
                                />
                            )}
                        </Droppable>
                    );
                })}
            </div>
        </DragDropContext>
    );
};