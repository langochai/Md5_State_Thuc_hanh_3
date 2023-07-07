import {useState} from 'react'
import './App.css'

function App() {
    let deleteHello = () =>{
        if(!confirm("delete this shiet?")) return;
        setDisplay(false);
    }
    let [display, setDisplay] = useState(true)
    if (display) {
        return (
            <>
                <p>Hello</p>
                <button onClick={() => deleteHello() }>Delete</button>
            </>
        )
    } else return null
}

export default App
