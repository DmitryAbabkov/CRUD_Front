import React, {useEffect, useState} from 'react';
import './App.css';
import Update from "./Components/Update";
import NewNotes from "./Components/NewNotes";
import CardRender from "./Components/CardRender";

function App() {
    const [state, setState] = useState([])

    const fetchNotes = () => {
        fetch('http://localhost:7070/notes', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => setState(data))
            .catch(error => console.log(error));
    };
    useEffect(() => {
        fetchNotes();
    }, []);

    return (
        <div className="App">
            <div className="update">
                <Update update={fetchNotes}/>
            </div>
            <div className='cards__list'>
                <CardRender state={state} update={fetchNotes}/>
            </div>
            <div className='new_note'>
                <NewNotes update={fetchNotes}/>
            </div>
        </div>
    );
}

export default App;
