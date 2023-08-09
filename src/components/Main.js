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

    function handleChange(e) {
        const {name, value} = e.target;
        setMeme(prevState => {
            return {
                ...prevState, 
                [name]: value
            }
        })
    }
    return (
        <main>
            <div className = "form">
                    <input 
                        type="text" 
                        placeholder="Top text" 
                        className="form-input" 
                        value = {meme.topText}
                        onChange = {handleChange}
                        name = "topText"
                    />
                    <input 
                        type="text" 
                        placeholder="Bottom text" 
                        className="form-input" 
                        name = "bottomText"
                        value = {meme.bottomText}
                        onChange = {handleChange}
                    />
                    <button 
                        className="form-button" 
                        onClick={pickImage}
                    > 
                        Get a new meme image 🖼 
                    </button>
            </div>
            <div className="meme">
                <img src = {meme.meme} className = "meme-image"/>   
                <h2 className="meme-text top">{meme.topText}</h2>
                <h2 className="meme-text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    );
}

export default Main;