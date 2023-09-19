import React, { useState } from 'react'
import Description from './Description'

const PokemonThumbnail = ({id,name,image,type,height,weight,stat1,stat2,stat3,stat4,stat5,stat6,bs1,bs2,bs3,
    bs4,bs5,bs6, abil, mov, sprite}) => {
    
    const [show,setShow] = useState(false)
    const style = `thumb-container ${type} ${show}-show`
    return (
        <div className ={style}>
            <div className='poke-wrapper'>
                <div className="number">
                    <small>#0{id}</small>
                </div>
                <img src={image} alt={name} />
                <h3>{name.toUpperCase() }</h3>
                <small>Type : {type}</small>
                <button className="pokeinfo" onClick={()=>setShow(!show)}>{show===true?"Know less...":"Know more..."}
                    {!show ? <img className='sprite' src={sprite.front_default}></img> : <img className='sprite' src={sprite.front_shiny}></img>}
                </button>
            </div>
            
            <div className="detail-wrapper">
                
                
                {show===true?<Description weightpok={weight} heightpok={height} pokstat1={stat1}
                pokstat2={stat2}
                pokstat3={stat3}
                pokstat4={stat4}
                pokstat5={stat5}
                pokstat6={stat6}
                
                posbs1={bs1}
                posbs2={bs2}
                posbs3={bs3}
                posbs4={bs4}
                posbs5={bs5}
                posbs6={bs6}

                abil={abil}
                mov={mov}

                 /> :<></>}
                
            </div>
            
        </div>
    )
}

export default PokemonThumbnail
