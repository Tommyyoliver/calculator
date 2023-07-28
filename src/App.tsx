import { useState } from "react";
import { evaluate } from "mathjs";
import './App.css';

function App() {
    
    const rows: (number|string)[][] = [
        ['AC', '(', ')', '←'],
        [7,8,9, '/'],
        [4,5,6, '*'],
        [1,2,3, '-'],
        [0, '.', '=', '+']
    ];
    
    const [values, setValues] = useState("");

    const addValue = (op: number | string) => {
        if(op == '=') {
            const equal = evaluate(values).toString();
            setValues(equal);
        } else if(op == '←') {
            const array: (string|number)[] = values.split('');
            array.pop();
            const value = array.join('');
            setValues(value);
            
        } else if(op == 'AC') {
            setValues("");
        } else  {
            setValues(values + op);
        }
    }


    return (
        <div className="body">
            <h1 className="title">Calculator</h1>
            <div className="calculator">
                <div className="display">
                    <input type="text" value={values} readOnly/>
                </div>
                <div className="keyboar">
                    {rows.map((row, idx) => (
                    <div key={idx}>
                        {row.map(number => (
                            <button className="key" key={number} onClick={() => addValue(number)}>{number}</button>
                        ))}
                    </div> 
                    ))}
                </div>
            </div>
        </div>
    )
}

export { App };