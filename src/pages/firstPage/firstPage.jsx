import './firstPage.css'
import {StartModal} from "../../components/startModal/startModal";
import {useEffect, useState} from "react";
import {Card} from "../../components/card/card";

import img1 from '../../img/memo-01.jpg'
import img2 from '../../img/memo-02.jpg'
import img3 from '../../img/memo-03.jpg'
import img4 from '../../img/memo-04.jpg'
import img5 from '../../img/memo-05.jpg'
import img6 from '../../img/memo-06.jpg'
import img7 from '../../img/memo-07.jpg'
import img8 from '../../img/memo-08.jpg'
import img9 from '../../img/memo-09.jpg'
import img10 from '../../img/memo-10.jpg'
import {FormModal} from "../../components/formModal/formModal";


export const FirstPage = ({setPath}) => {

    const [modalVisible, setModalVisible] = useState(true)

    const [modalFinishVisible, setModalFinishVisible] = useState(false)

    const [firstCard, setFirstCard] = useState(0);
    const [secondCard, setSecondCard] = useState(0);

    const [count, setCount] = useState(0)

    const [cards, setCards] = useState([
        {
            img: img1, checked: false, turn: false, random: Math.random(), par: 1
        }, {
            img: img2, checked: false, turn: false, random: Math.random(), par: 2
        }, {
            img: img3, checked: false, turn: false, random: Math.random(), par: 3
        }, {
            img: img4, checked: false, turn: false, random: Math.random(), par: 4,
        }, {
            img: img5, checked: false, turn: false, random: Math.random(), par: 5,
        }, {
            img: img6, checked: false, turn: false, random: Math.random(), par: 6,
        }, {
            img: img7, checked: false, turn: false, random: Math.random(), par: 7
        }, {
            img: img8, checked: false, turn: false, random: Math.random(), par: 8
        }, {
            img: img9, checked: false, turn: false, random: Math.random(), par: 9
        }, {
            img: img10, checked: false, turn: false, random: Math.random(), par: 10
        }, {
            img: img1, checked: false, turn: false, random: Math.random(), par: 1
        }, {
            img: img2, checked: false, turn: false, random: Math.random(), par: 2
        }, {
            img: img3, checked: false, turn: false, random: Math.random(), par: 3,
        }, {
            img: img4, checked: false, turn: false, random: Math.random(), par: 4,
        }, {
            img: img5, checked: false, turn: false, random: Math.random(), par: 5,
        }, {
            img: img6, checked: false, turn: false, random: Math.random(), par: 6
        }, {
            img: img7, checked: false, turn: false, random: Math.random(), par: 7
        }, {
            img: img8, checked: false, turn: false, random: Math.random(), par: 8
        }, {
            img: img9, checked: false, turn: false, random: Math.random(), par: 9
        }, {
            img: img10, checked: false, turn: false, random: Math.random(), par: 10
        },
    ]);

    let isClicked = false;


    function sort(a, b) {
        return a.random - b.random;
    }

    function sortCards() {

        let cardsSorted = cards.sort(sort)
        setCards(cardsSorted)
    }

    useEffect(() => {
        sortCards()
    }, []);

    function resetCards(){
        setFirstCard('');
        setSecondCard('');
        setCount(count+1);
    }

    function allClear(){

        let win = true

        cards.map(e=>{
            if(!e.turn){
                win = false
            }
        })


        if(win){
            setModalFinishVisible(true);
        }

    }

    function handleClick(item, index) {


        if (isClicked || item.checked) {
            return null;
        }


        if(!firstCard){
            setFirstCard(item.par)
        }
        if(firstCard){
            setSecondCard(item.par)
            setTimeout(()=>{

                if(firstCard === item.par){
                    cards.map((e)=>{
                        if(e.par === item.par){
                            e.turn = true
                        }
                    })

                    setCards([
                        ...cards
                    ])
                }

                else{
                    cards.map((e)=>{
                        e.checked = false
                    })
                    setCards([
                        ...cards
                    ])
                }

                resetCards()
            }, 2000)
        }


        if(allClear()){
            setModalFinishVisible(true)
        }

        cards[index].checked = true;
        console.log(cards[index])

        setCards([
            ...cards
        ]);
    }

    function ganhar(){
        cards.map(e=> {
            e.checked = true;
            e.turn = true;
        })

        setCards([
            ...cards
        ])
    }

    useEffect(() => {
        allClear()
    }, [cards]);


    return (<>
        {modalVisible ? <StartModal setVisible={setModalVisible}/> : <></>}
        {modalFinishVisible ? <FormModal setPath={setPath} count={count} /> : <></>}
        <main>

            <div className="container-game">

                    {cards.map((item, index) => {
                        return <Card
                            img={item.img}
                            index={index}
                            turn={item.turn}
                            checked={item.checked}
                            onClick={(e) => handleClick(item, index)}
                        />
                    })}

            </div>

            <div className="container-counter">
                <h3>Jogadas realizadas</h3>
                <h2>{count}</h2>
            </div>


        </main>
    </>)

}
