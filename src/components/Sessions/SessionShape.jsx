import React from 'react';
import { useMousePosition } from '../../services/MousePosition';

// Rechart
import { Rectangle } from 'recharts';

// place a rectangle at the mouse position
/** https://recharts.org/en-US/api/Rectangle */
export default function SessionShape() {
    const { x, y } = useMousePosition();
    //console.log(x)
    return (
        <Rectangle fill="rgba(0, 0, 0, 0.1)" stroke="rgba(0, 0, 0, 0)" width={x*2} height={y} x={x - 238} />
    )
}
