import React from 'react';

const Tasks = () => {
    const savedTask = localStorage.getItem('task');

    return (
        <div>
            <p className='text-center text-bronzeDark text-3xl font-custom'>{savedTask}</p>
        </div>
    );
};

export default Tasks;
