import React, { useState } from 'react';
import Header from "./components/Header/Header";
import Title from "./components/Title/Title";
import Input from "./components/Input/Input";
import Tasks from "./components/Tasks/Tasks";

function App() {
    return (
        <div className="min-h-screen bg-gradient-to-r from-gradientDark1 from-5% via-gradientDark2 via-35% to-gradientDark3 to-95%">
            <Header/>
            <Title/>
            <Input/>
            <Tasks />
        </div>
    );
}

export default App;
