import React, {ChangeEvent, FC, useState} from 'react';

interface IProps {
    update: () => void
}

const NewNotes: FC<IProps> = ({update}) => {
    const [state, setState] = useState('');

    function addNotes(e:ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        setState('');

        fetch('http://localhost:7070/notes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({'id': 0, 'content': state})
        })
            .then(response => update())
            .catch(error => console.log(error))
    }

    function changeInput(e:ChangeEvent<HTMLTextAreaElement>) {
        setState(e.target.value)
    }
    return (
        <>
            <h2>New Note</h2>
            <div className='text__block'>
                <form onSubmit={addNotes} action="">
                <textarea className='textarea' value={state} onChange={changeInput}></textarea>
                <button className='icon__add'>V</button>
                </form>
            </div>
        </>
    );
}

export default NewNotes;
