import React from 'react'

export default function TradeInput(props){
    return <>{props.type == 'input' ?
                (<div className="trade-input-item">
                    <div className="trade-input-title">{props.label}</div>
                    <input className="trade-input" placeholder="text input"/>
                </div>) : 
                (<div>
                    <div className="trade-input-title">{props.label}</div>
                    <select className="trade-input">
                        {
                            props.options.map(opt => <option key={opt}>{opt}</option>)
                        }
                    </select>
                </div>)}
    </>
}