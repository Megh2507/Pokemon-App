import React from 'react'


const Description = ({heightpok,weightpok,pokstat1,pokstat2,pokstat3,pokstat4,pokstat5,pokstat6,posbs1,posbs2,posbs3,posbs4,posbs5,posbs6, abil, mov}) => {
    return (
        <div className="desc">
            <div className='height-weight'>
                <h3>Height</h3>
                <p>{heightpok*10} cm.</p>
                <h3>Weight</h3>
                <p>{weightpok*0.1} kg</p>
            </div>
            
            <div className='stat'>
                <h3>Stat</h3>
                <p>{pokstat1} : {posbs1}</p>
                <p>{pokstat2} : {posbs2}</p>
                <p>{pokstat3} : {posbs3}</p>
                <p>{pokstat4} : {posbs4}</p>
                <p>{pokstat5} : {posbs5}</p>
                <p>{pokstat6} : {posbs6}</p>
            </div>
            
            <div className='abilities'>
                <h3 >Abilities</h3>
                <p>{abil.map((a, index) => (<p>Ability {index + 1} : {a.ability.name}</p>))}</p>
            </div>

            <div className='moves'>
                <h3>Moves</h3>
                <p>{mov.slice(0,5).map((m, index) => (<p>Move {index + 1} : {m.move.name}</p>))}</p>
            </div>

            
        </div>
    )
}

export default Description
