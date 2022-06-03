import React, { useState } from 'react';
import PageTitle from '../../components/layout/PageTitle';
import SelectionTitle from '../../components/layout/SectionTitle';

const UseState = (props) => {

    const [count, setCount] = useState(0)

    return (
        <div className="UseState">
            <PageTitle
                title="Hook UseState"
                subtitle="Estado em componentes funcionais!" />

            <SelectionTitle title="Exercicio #01" />

            <div className="center">
                <span className="text">{count}</span>
                <div>
                    <button onClick={() => setCount (count -1)} className="btn">-1</button>
                    <button onClick={() => setCount (count +1)} className="btn">+1</button>
                    <button onClick={() => setCount (currect => currect +1000 )} className="btn">+1000</button>
                </div>
            </div>


            <SelectionTitle title="Exercicio #02" />
        </div>
    )
}

export default UseState
