import React from 'react';
import PropTypes from "prop-types";

// Recharts Shape
import { Rectangle } from 'recharts';

/**
 * Custom Cursor, place a rectangle at the mouse position
 * @param { object }
 * @return { SessionShape }
 */
/** https://recharts.org/en-US/api/Rectangle */
export default function SessionShape({ coor }) {
    const { x } = coor;
    //console.log(coor)
    return (
        <Rectangle fill="rgba(0, 0, 0, 0.1)" width={x+400} height={260} x={x} />
    )
}

SessionShape.propTypes = {
    /**
    * Cursor coordinate
    */
    x: PropTypes.number,
    y: PropTypes.number
}

