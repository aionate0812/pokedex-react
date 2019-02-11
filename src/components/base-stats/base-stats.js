import React from 'react'
import _ from 'lodash'
const renderStats = (statsArr) => {
    _.reverse(statsArr)
    return _.map(statsArr, (value ,key)=>{
        return (
        <div key={key}>
            <h6>{_.capitalize(value.stat.name)}</h6>
            <p>{value.base_stat}</p>
        </div>
        )
    })
}

const BaseStats = (props) => {
    return (
        <React.Fragment>
            {renderStats(props.baseStats)}
        </React.Fragment>
    )
}

export default BaseStats