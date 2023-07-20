import {React, useState} from 'react';

const styles = {
    home: {
        position: 'absolute',
        top:63,
        bottom: 0, left: 0, right: 0,
        textAlign: 'center',
        backgroundColor: '#050505',
        color: '#14d0e0'
    },
    title: {
        color: '#14d0e0',
        textAlign: 'center',
        height: '100px',
        fontSize: '50px'
    },
    column: {
        clear: 'both',
        content: '',
        display: 'inline-block',
        textAlign: 'center',
        position: 'relative',
        margin: 'auto auto'
    },
    rectangle: {
        height: '200px',
        width: '150px',
        fontSize: '50px',
        textAlign: 'center',
        border: '5px solid #14d0e0'
    }
}

function SetUp({code,tries,maxTries,guess,onGuess}){
    const [inputs,setInputs] = useState({});
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values,[name]:value}))
    }
    const checkCode = (event) => {
        event.preventDefault();
        if(inputs.digZero && inputs.digOne && inputs.digTwo && inputs.digThree)
        {
            let fullGuess = inputs.digZero + inputs.digOne + inputs.digTwo + inputs.digThree
            onGuess(fullGuess);
        }  
    }
    var upToDateGuess = verifyGuess(guess,code.toString());
    let status;
    if(upToDateGuess === code.toString() && tries <= maxTries){
        status = 'YOU WIN';
    }
    else if(tries>maxTries){
        status = `${maxTries} GUESSES - YOU LOSE CODE WAS ${code.toString()}`;
    }
    else {
        status = `${upToDateGuess}`
    }
    return (
        <>
            <form onSubmit= {checkCode}>
            <div style={styles.column}><input 
                style={styles.rectangle}  
                type="number" 
                min="0" 
                max="9" 
                name="digZero"
                value={inputs.digZero || ""}
                onChange={handleChange}>
            </input></div>
            <div style={styles.column}>
                <input
                style={styles.rectangle}  
                type="number" 
                min="0" 
                max="9" 
                name="digOne"
                value={inputs.digOne || ""}
                onChange={handleChange}>
                </input>
            </div>
            <div style={styles.column}>
            <input
                style={styles.rectangle}  
                type="number" 
                min="0" 
                max="9" 
                name="digTwo"
                value={inputs.digTwo || ""}
                onChange={handleChange}>
                </input>
                </div>
            <div style={styles.column}>
            <input
                style={styles.rectangle}  
                type="number" 
                min="0" 
                max="9" 
                name="digThree"
                value={inputs.digThree || ""}
                onChange={handleChange}>
                </input>
                </div>
            <div>
            <input type="submit" value="Submit Guess!" />
            </div>
            </form>
            <div>
                {status}
            </div>
        </>
    );   
}

function verifyGuess(inputGuess,codeToGuess){
    var returnString = "";
    for(let i=0; i<codeToGuess.length;i++){
        if(inputGuess[i] === codeToGuess[i]) returnString += codeToGuess[i];
        else returnString += " ";
    }
    return returnString;
}


//to do
//functionality to track guesses
//display guesses
//functionality and display for positions and digits that are correct


export default function CodeBreaker() {
    const [maxGuesses,setMaxGuesses] = useState(10);
    const [guesses,setGuesses] = useState(1);
    const [codeToBreak,setCodeToBreak] = useState(Math.floor(Math.random() * 10000))
    const [currentGuess,setCurrentGuess] = useState("");

    function handleGuess (fullGuess) {
        setMaxGuesses(maxGuesses);
        setCodeToBreak(codeToBreak);
        setGuesses(guesses+1);
        setCurrentGuess(fullGuess);
    }
    return (
        <div style={styles.home}>
            <div style={styles.title}>Code Breaker</div>
            <SetUp code={codeToBreak} tries={guesses} maxTries={maxGuesses} guess={currentGuess} onGuess={handleGuess}></SetUp>
        </div>
    )
}