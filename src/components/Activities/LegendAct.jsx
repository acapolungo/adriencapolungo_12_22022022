import React from 'react'

export default function LegendAct() {
    return (
        <div className="legend">
            <div className="legend__item">
                <div className="legend__circle legend__circle--black"></div>
                <span>Poids (kg)</span>
            </div>
            <div className="legend__item">
                <div className="legend__circle"></div>
                <span>Calories brûlées (kCal)</span>
            </div>
        </div>
    )
}
