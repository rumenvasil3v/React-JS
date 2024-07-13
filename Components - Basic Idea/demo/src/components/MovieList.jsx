import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    setTimeout(() => {
        setCount();
    }, 2000);

    return (
        <>
            <h2>Counter</h2>

            <p>{count}</p>
        </>
    );
}