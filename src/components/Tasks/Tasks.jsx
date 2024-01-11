import React, { useState } from 'react';
import { ReactComponent as Trash } from "../../images/icons8-trash.svg";
import { ReactComponent as Done } from "../../images/icons8-done.svg";
import { ReactComponent as Close } from "../../images/icons8-close.svg";
import Pencil from "../../images/icons8-pencil-50.png";
import classes from "./Tasks.module.scss";

const Tasks = ({ savedText, onDelete, onHighlight }) => {
    const [editIndex, setEditIndex] = useState(null);
    const [editedText, setEditedText] = useState('');

    const handleEdit = (index) => {
        setEditIndex(index);
        setEditedText(savedText[index].text);
    };

    const handleSaveEdit = () => {
        const updatedText = [...savedText];
        updatedText[editIndex].text = editedText;
        setEditedText('');
        setEditIndex(null);
        localStorage.setItem('savedText', JSON.stringify(updatedText));
    };

    const handleCancelEdit = () => {
        setEditedText('');
        setEditIndex(null);
    };

    return (
        <div className='pb-16'>
            <ul className=''>
                {savedText.map((item, index) => (
                    <li
                        className=' text-black text-3xl font-custom items-center'
                        key={index}
                    >
                        <div className='w-3/6 mx-auto flex justify-between items-center my-4 rounded-md border-2 border-black px-4 py-2'>
                            {editIndex === index ? (
                                <div className='flex items-center'>
                                    <input
                                        className='bg-darkDark text-inputTextPlaceholderDark  rounded-md outline-none'
                                        type='text'
                                        value={editedText}
                                        onChange={(e) => setEditedText(e.target.value)}
                                    />
                                    <button onClick={handleSaveEdit} className='mx-2'><Done  width="30" height="30"/></button>
                                    <button onClick={handleCancelEdit}><Close  width="30" height="30"/></button>
                                </div>
                            ) : (
                                <div
                                    style={{
                                        textDecoration: item.highlighted ? 'line-through' : 'none',
                                        opacity: item.highlighted ? 0.5 : 1,
                                        cursor: 'pointer',
                                        width: '500px'
                                    }}
                                    onClick={() => onHighlight(index)}
                                >
                                    <p className='break-words'>
                                        {item.text}
                                    </p>
                                </div>
                            )}
                            <div className='flex items-center'>
                                {editIndex !== index ? (
                                    <button onClick={() => handleEdit(index)} className='mr-4'>
                                        <img src={Pencil} width="30" height="30" alt=""/>
                                    </button>
                                ) : null}
                                <button onClick={() => onDelete(index)} className='ml-4'>
                                    <Trash width="30" height="30" className={classes.trash} />
                                </button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Tasks;

