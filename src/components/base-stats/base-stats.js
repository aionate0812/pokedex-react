import React from 'react'
import _ from 'lodash'
import './base-stats.css'


const renderStats = (statsArr) => {
    _.reverse(statsArr)
    return _.map(statsArr, (value ,key)=>{
        return (
        <div className='base-stats-component' key={key}>
            <h5 className='base-stats-title'>{_.capitalize(value.stat.name)}</h5>
            <h6>{value.base_stat}</h6>
        </div>
        )
    })
}

const BaseStats = (props) => {
    return (
        <div style={{marginTop:'50px'}}>
        <h2 className='base-stats-header'>Base Stats</h2>
            <div className='row justify-content-around base-stats-container'>
            {renderStats(props.baseStats)}
            </div>
        </div>
    )
}

export default BaseStats