import React from 'react';

const styles = {
    home: {
        position: 'absolute',
        top:63,
        bottom: 0, left: 0, right:0,
        textAlign: 'center',
        backgroundColor: '#050505',
        color: '#14d0e0',
    }
};
export default class Home extends React.Component {
    render() {
        return <div style={styles.home}>
            <h1>Tic Tac Toe</h1>
            <p>Placeholder for Tic Tac Toe Game</p>
        </div>
    }
}