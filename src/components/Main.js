import './Main.css'
import memeData from '../data/memeData.js'
import {useState} from "react"

function Main (){
    const [allMemes, setAllMemes] = useState(memeData)
    const memesArray = allMemes.data.memes
    const [meme, setMeme] = useState({
        topText: "", 
        bottomText: "", 
        meme: ""
    })

    function pickImage() {
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevState => ({
            ...prevState,
            meme: url
        }))
    }
    return (
        <main>
            <div className = "form">
                    <input type="text" placeholder="Top text" className="form-input" />
                    <input type="text" placeholder="Bottom text" className="form-input" />
                    <button className="form-button" onClick={pickImage}> Get a new meme image 🖼 </button>
            </div>
            <img src = {meme.meme} className = "meme-image"/>
        </main>
    );
}

export default Main;