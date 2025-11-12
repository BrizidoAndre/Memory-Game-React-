import {useState} from "react";
import './formModal.css'

export const FormModal = ({setPath, count}) => {

    const [name, setName] = useState('')

    function saveResults(e) {
        let winners = localStorage.getItem('winners')

        if(winners){
            localStorage.setItem('winners',count + ',' + name)
            e.preventDefault()
        }
        else{
            localStorage.setItem('winners', winners + ';' + count + ',' + name)
            e.preventDefault()
        }
            setPath('/Winners')

    }

    return (
        <div className={'modal-background'}>
            <form className="modal-container" onSubmit={(e) => saveResults(e)}>
                <h3>Parabéns</h3>
                <p>Você conseguiu. Agora vamos marcar sua pontuação.</p>

                <div className="container-row">

                    <div className="container-input">
                        <label htmlFor="name">Nome</label>
                        <input
                            id={'name'}
                            type="text"
                            value={name}
                            onChange={e => setName(e.target.value)}/>
                    </div>

                    <button className={'button-form'} disabled={name.length <= 0}>Ok</button>
                </div>
            </form>
        </div>
    )
}