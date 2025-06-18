import React, { useState } from 'react'
import './WinnerCount.css'

const WinnerCount = (props) => {
   
    const [score,setScore] = useState({xScore:0 , oScore:0})

    if(props.isWinner){

    if ( props.isWinner === 'X') {
     let {xScore} = score;
     xScore += 1;
     setScore({...score, xScore})
    } 
    else{
        let {oScore} = score;
        oScore += 1;
        setScore({...score, oScore})
    }

    
}
console.log(score) 
    return (
        <div className="wins" >
            <div className="Xwins bwins" >X win - <span>0</span></div>
            <div className="Owins bwins" >Y win - <span>0</span></div>
        </div>
    )
}

export default WinnerCount
