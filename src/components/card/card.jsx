import './card.css'

export const Card = ({img,  turn, checked, onClick }) => {


    return (
        <div className={'container-card'}>
            <input type="checkbox" checked={turn ? turn : checked} onChange={onClick}/>
            
            <div className="container-flip">
                <div className="card-front">
                    <h1>?</h1>
                </div>
                <img src={img} alt=""/>

            </div>
        </div>
    )
}