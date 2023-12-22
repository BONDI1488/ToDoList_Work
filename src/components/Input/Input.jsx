import React, { useState } from 'react';

const Input = () => {
    const [task, setTask] = useState('');

    const handleInputChange = (e) => {
        setTask(e.target.value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('task', task);
    };

    return (
        <form className='text-center font-custom pt-8 pb-9' onSubmit={handleFormSubmit}>
            <input
                className='px-3 rounded-l-lg placeholder:text-inputTextPlaceholderDark outline-none bg-darkDark text-inputTextDark w-[570px] h-[45px] text-xl'
                name="inputToDO"
                id="inputToDO"
                placeholder='Add a task.'
                type="text"
                value={task}
                onChange={handleInputChange}
            />
            <button className='rounded-r-lg text-black bg-bronzeDark w-[130px] h-[45px] ' type="submit">
                <p className='text-xl'>I will do it!</p>
            </button>
        </form>
    );
};

export default Input;
