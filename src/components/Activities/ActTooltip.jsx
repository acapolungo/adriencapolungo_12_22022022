import React from 'react'

export default function ActTooltip({active, payload}) {
    if (active && payload && payload.length) {
        return (
            <section className="tooltipact">
                <p className="tooltipact__info">{`${payload[0].value} kg`}</p>
                <p className="tooltipact__info">{`${payload[1].value} kCal`}</p>
            </section>
        )
    }
    return null;
}