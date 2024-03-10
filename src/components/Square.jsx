import { useState } from "react";

function Square(props) {
    const [value, setValue] = useState("");

    return (
        <div
            className="bg-slate-200 p-2 aspect-square text-8xl text-center text-slate-950 font-medium flex justify-center cursor-pointer"
            onClick={props.onClick}>
            {value}
        </div>
    );
}

export default Square;
