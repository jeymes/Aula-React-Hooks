import React, { useContext } from 'react'
import PageTitle from '../../components/layout/PageTitle'

import { DataContext } from '../../data/DataContex'

const UseContext = (props) => {

    const contex = useContext(DataContext)

    function addNumber(delta){
        contex.setState({
            ...contex.state,
            number: contex.state.number + delta
        })
    }

    return (
        <div className="UseContext">
            <PageTitle
                title="Hook UseContext"
                subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"/>

                <div className="center">
                    <span className="text">{contex.state.text}</span>
                    <span className="text">{contex.state.number}</span>

                    <div>
                        <button className="btn" onClick={() => addNumber(-1)}>-1</button>
                        <button className="btn" onClick={() => addNumber(+1)}>+1</button>
                    </div>
                </div>
            
        </div>
    )
}

export default UseContext
