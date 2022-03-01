import React from 'react'
import { useEffect } from 'react';

export default function SessionTooltip({ active, payload, setCoor, coordinate }) {

    // avoid badsetState child > parent
    useEffect(() => {
        const returnCoordinate = () => {
            setCoor(coordinate)         
        }
        returnCoordinate()
      }, [coordinate, setCoor]);

    if (active && payload && payload.length) {

        return (
            <div className="sessiontooltip">
                <p className="sessiontooltip__txt">{`${payload[0].value} min`}</p>
            </div>
        )
    }
    return null;
}