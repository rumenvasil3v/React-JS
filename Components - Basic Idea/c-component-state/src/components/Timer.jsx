import { useState } from 'react';

export default function Timer() {
    const array = useState(0);

    const timer = array[0];
    const setTimer = array[1];

    return (
        <button onClick={function() {
            setTimer(oldTimer => oldTimer + 1);
        }}>{timer}</button>
    )
}
