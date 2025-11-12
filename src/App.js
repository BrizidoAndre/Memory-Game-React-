import './App.css';
import {useState} from "react";
import {FirstPage} from "./pages/firstPage/firstPage";
import {WinPage} from "./pages/winPage/winPage";

function App() {

    const [path, setPath] = useState('/FirstPage')


    let Component = null

    switch (path) {
        case'/FirstPage':
            Component = <FirstPage setPath={setPath}/>
            break;
        case '/Winners':
            Component = <WinPage setPath={setPath} />
            break;
        default:
            Component = <FirstPage />
            break;
    }

    return (
        <div className="App">

            {Component}

        </div>
    );
}

export default App;
