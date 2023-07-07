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

function Rectangle() {
    return (
        <input style={styles.rectangle} placeholder="9" type="number" min="0" max="9"></input>
    );
}

function SetUp(){
    function checkCode(event){
        event.preventDefault();
        console.log('hit');
    }
    return (
        <>
            <form onSubmit= {checkCode}>
            <div style={styles.column}><Rectangle/></div>
            <div style={styles.column}><Rectangle/></div>
            <div style={styles.column}><Rectangle/></div>
            <div style={styles.column}><Rectangle/></div>
            <div style={styles.column}><Rectangle/></div>
            <div>
            <input type="submit" value="Submit form" />
            </div>
            </form>
        </>
    );
}


//to do
//functionality to track guesses
//display guesses
//functionality and display for positions and digits that are correct
//first need to coalesce all inputs into one string/string array

export default function CodeBreaker() {
    return (
        <div style={styles.home}>
            <div style={styles.title}>Code Breaker</div>
            <SetUp></SetUp>
        </div>
    )
}