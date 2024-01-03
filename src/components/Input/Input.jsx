import React, { useState } from 'react';

const Input = ({onSave}) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSaveClick = () => {
        onSave(inputValue);
        setInputValue('');
    };


    return (
        <form className='text-center font-custom pt-8 pb-9'>
            <input
                className='px-3 rounded-l-lg placeholder:text-inputTextPlaceholderDark outline-none bg-darkDark text-inputTextDark w-[570px] h-[45px] text-xl'
                name="inputToDO"
                id="inputToDO"
                placeholder='Add a task.'
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
            <button className='rounded-r-lg text-black bg-bronzeDark w-[130px] h-[45px] ' onClick={handleSaveClick} type="submit">
                <p className='text-xl'>I will do it!</p>
            </button>
        </form>
    );
};

export default Input;
