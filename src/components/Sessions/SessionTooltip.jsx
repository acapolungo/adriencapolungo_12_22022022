import React from 'react'

export default function SessionTooltip({ active, payload }) {
    if (active && payload && payload.length) {
        return (
            <div className="sessiontooltip">
                <p className="sessiontooltip__txt">{`${payload[0].value} min`}</p>
            </div>
        )
    }
    return null;
}