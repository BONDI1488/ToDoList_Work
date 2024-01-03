import React, {useEffect, useState} from 'react';
import Header from "./components/Header/Header";
import Title from "./components/Title/Title";
import Input from "./components/Input/Input";
import Tasks from "./components/Tasks/Tasks";

function App() {
    const [savedText, setSavedText] = useState([]);

    useEffect(() => {
        const storedText = localStorage.getItem('savedText');
        if (storedText) {
            setSavedText(JSON.parse(storedText));
        }
    }, []);

    const handleSave = (text) => {
        const updatedText = [...savedText, { text, highlighted: false }];
        setSavedText(updatedText);
        localStorage.setItem('savedText', JSON.stringify(updatedText));
    };

    const handleDelete = (index) => {
        const updatedText = savedText.filter((_, i) => i !== index);
        setSavedText(updatedText);
        localStorage.setItem('savedText', JSON.stringify(updatedText));
    };

    const handleHighlight = (index) => {
        const updatedText = [...savedText];
        updatedText[index].highlighted = !updatedText[index].highlighted;
        updatedText[index].deleted = false; // Додайте цей рядок, щоб забезпечити скидання закреслення
        setSavedText(updatedText);
        localStorage.setItem('savedText', JSON.stringify(updatedText));
    };

    console.log(savedText);

    return (
        <div className="min-h-screen bg-gradient-to-r from-gradientDark1 from-5% via-gradientDark2 via-35% to-gradientDark3 to-95%">
            <Header/>
            <Title/>
            <Input onSave={handleSave}/>
            <Tasks savedText={savedText}
                   onDelete={handleDelete}
                   onHighlight={handleHighlight}
            />
        </div>
    );
}

export default App;
