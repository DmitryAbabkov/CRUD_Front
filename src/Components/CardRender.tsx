import React, {FC} from 'react';

interface IProps {
    state: any[]
    update: () => void
}

const CardRender: FC<IProps> = (props) => {
    function deleteCard(id:number) {
        fetch(`http://localhost:7070/notes/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => props.update())
            .catch(error => console.log(error));
    }

    return (
        <>
            {props.state.map((item, key: number) => (
                    <div key={key} className='card'>
                        <p className="card__description">{item.content}</p>
                        <span className='delete' onClick={()=>deleteCard(item.id)}>x</span>
                    </div>
                )
            )}
        </>
    );
}

export default CardRender;
