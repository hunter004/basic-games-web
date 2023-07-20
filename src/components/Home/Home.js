import React from 'react';
import './Home.css';

const styles = {
    home: {
        position: 'absolute',
        margin: '0',
        alignItems: 'center',
        top:63,
        bottom: 0, left: 0, right:0,
        textAlign: 'center',
        backgroundColor: '#050505',
        color: '#14d0e0',
        justifyContent: 'center',
        display: 'flex',
        overflow: 'hidden'
    }
};
export default class Home extends React.Component {
    render() {
        return <>
        <div style={styles.home}>
           <div class="sun"></div>
           <div class="earth">
            <div class="moon"></div>
           </div>
        </div>
        </>
    }
}