import React from 'react';

const TaskCard = ({task}) => {
    return (
        <div className='p-4 border rounded-2xl bg-base-300 m-3 '>
            <p className='text-2xl font-semibold'>{task.taskName}</p>
            <p>{task.description}</p>
        </div>
    );
};

export default TaskCard;