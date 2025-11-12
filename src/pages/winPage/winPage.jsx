import {NamePoint} from "../../components/namePoint/namePoint";
import './winPage.css'

export const WinPage = ({setPath}) => {

    const item = localStorage.getItem('winners')

    let winners = item.split(';')

    let winnersBeutify = [];

    winners.map((e)=>{
        winnersBeutify.push({
            points: e.split(',')[0],
            name: e.split(',')[1]
        })
    })

    const sort = winnersBeutify.sort((a,b)=>a.points + b.points)


    function reload(){
        setPath('/FirstPage')
    }

    return (
        <main>
            <div className="container">

                <h2>Nossos vencedores:</h2>

                {sort.map((e)=>{
                  return <NamePoint name={e.name} point={e.points}/>
                })}

                <button className={'reload-button'} onClick={()=>reload()}>Restart</button>

            </div>
        </main>
    )
}