import { useState } from "react"
import data from "./data";
import './styles.css'

export default function Accordian(){
    const [selected, setSelected] = useState<number | null>(null);
    const [enableMultiSelection,setEnableMultiSelction] = useState<boolean>(false);
    const [multiple,setMultiple] = useState<number[]> ([]);
    function onSelect(id: number){
        console.log(`${id} got selected`)
        if (enableMultiSelection){
            if (multiple.includes(id)){
                setMultiple(multiple.filter(itemId => itemId != id))
            }
            else{
                setMultiple([...multiple,id])
            }
        }
        else{
            setSelected(id === selected ? null : id)
        }
         

    }
    return (
        <div className="wrapper">
            <button onClick={() => setEnableMultiSelction(!enableMultiSelection)}>
                Enable Multi Selection
            </button>
        <div className="accordian">
            {
                data && data.length > 0 &&(
                    data.map(item => (
                        <div className="item">
                            <div className="title" onClick={() => onSelect(item.id)}>
                                <h3>{item.question}</h3>
                                <span>+</span>
                        </div>
                        {
                        enableMultiSelection ? (
                            multiple.includes(item.id) && (
                                <div className="answer">
                                    {item.answer}
                                </div>
                            )
                        ):(
                            selected === item.id && (
                                <div className="answer">
                                    {item.answer}
                                </div>
                            )
                        )
                        }

                        </div>
                    ))
                )
            }
        </div>
    </div>
    )
}