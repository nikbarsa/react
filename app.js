import React from 'react';
import './App. css';

function App() {
    return (
        <div className="App">
            <Myhead />
        </div>
    );
}

export default App;



const Myhead = (Props) => {
    return (
        <div style={{ color: red }}>
            привет,мир
        </div>
    )
}
