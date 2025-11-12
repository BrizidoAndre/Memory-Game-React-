import './startModal.css'

export const StartModal = ({setVisible}) => {


    function closeModal(){
        setVisible(false)

    }

    return(
        <div className={'modal-background'}>
            <div className="modal-container">
                <h1>Welcome to the Guatemala Memory Game</h1>
                <p>Are you ready?</p>
                <button onClick={()=> closeModal()}>Start Game</button>
            </div>
        </div>
    )
}