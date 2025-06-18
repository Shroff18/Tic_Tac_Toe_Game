import React, { useState } from "react";
import "./TicTacToe.css";
import Square from "../Square/Square";
// import WinnerCount from "../WinnerCuont/WinnerCount";

const TicTacToe = () => {
    const [state, setState] = useState(Array(9).fill(null))
    const [isXturn, setIsXturn] = useState(true);

    const checkWinner = () => {
        const winnerLogic = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (let logic of winnerLogic) {
            const [a, b, c] = logic;
            if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
                return state[a]
            }
        }
        return false;
    }


    const isWinner = checkWinner();

    console.log(state)



    let handleClicked = (index) => {

        if (state[index] !== null) {
            return;
        }
        // console.log("i am clicked " + index)
        const cpoyState = [...state]
        cpoyState[index] = isXturn ? 'X' : 'O';
        setState(cpoyState)
        setIsXturn(!isXturn)
    }
    
    return (
        <div className="container">

            <h1 className="title">
                Tic Tac Toe Game In <span>React</span>
            </h1>
            {/* <WinnerCount isWinner={isWinner} /> */}
            {isWinner ? (<div>
                <h2 className="iswiner">{isWinner} won the game</h2>
                <button className="playAgain" onClick={() => { setState(Array(9).fill(null)) }}>Play <span>again</span></button>
            </div>) : (<>
                <h2 className="chanceMove" >Player <span>{isXturn ? "X" : "O"}</span> please move</h2>
                <div className="board">
                    <div className="row1">
                        <Square onClick={() => { handleClicked(0) }} value={state[0]} />
                        <Square onClick={() => { handleClicked(1) }} value={state[1]} />
                        <Square onClick={() => { handleClicked(2) }} value={state[2]} />
                    </div>
                    <div className="row2">
                        <Square onClick={() => { handleClicked(3) }} value={state[3]} />
                        <Square onClick={() => { handleClicked(4) }} value={state[4]} />
                        <Square onClick={() => { handleClicked(5) }} value={state[5]} />
                    </div>
                    <div className="row3">
                        <Square onClick={() => { handleClicked(6) }} value={state[6]} />
                        <Square onClick={() => { handleClicked(7) }} value={state[7]} />
                        <Square onClick={() => { handleClicked(8) }} value={state[8]} />
                    </div>
                </div>
            </>)}
            <button className="reset" onClick={() => { setState(Array(9).fill(null)) }} >Reset</button>
        </div>
    );
};

export default TicTacToe;
