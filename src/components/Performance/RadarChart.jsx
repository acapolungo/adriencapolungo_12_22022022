import React from 'react'
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
//import { useParams } from 'react-router-dom';

// Recharts
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, Legend, ResponsiveContainer } from 'recharts';

/**
* Component that build the user's radar chart.
* @param { object } data - props
* @param { number } data.userId
* @param { array } data.data
* @return { PerformanceChart }
*/
export default function PerformanceChart({ data }) {

    const [performance, setPerformance] = useState({})

    useEffect(() => {
        setPerformance(data)
    }, [data])

    //console.log(data)
    const perfData = performance?.data;

    /* updating values with an array to match Mock-up Figma */
    const perfName = ["Intensité", "Vitesse", "Force", "Endurance", "Energie", "Cardio"];
    perfData?.map((el, index) => el.kind = perfName[index])

    return (
        <article className="performance">
            {/** https://recharts.org/en-US/api/ResponsiveContainer */}
            {perfData &&
            <ResponsiveContainer width="100%" height="100%">
                {/** https://recharts.org/en-US/api/RadarChart */}
                <RadarChart
                    outerRadius={'70%'}
                    data={perfData}>
                        
                    {/** https://recharts.org/en-US/api/PolarGrid */}
                    <PolarGrid
                        //gridType='polygon'
                        radialLines={false}
                    />
                    {/** https://recharts.org/en-US/api/PolarAngleAxis */}
                    <PolarAngleAxis
                        dataKey="kind"
                        stroke="#fff"
                        tickLine={false}
                        dy={3}
                        tick={{ fontSize: 12, fontWeight: 500 }} />
                    {/** https://recharts.org/en-US/api/Radar */}
                    <Radar
                        dataKey="value"
                        stroke="transparent"
                        fill="#e60000"
                        fillOpacity={0.6} />
                    {/** https://recharts.org/en-US/api/Legend */}
                    <Legend />
                </RadarChart>
            </ResponsiveContainer>
            }
        </article>
    )
}

PerformanceChart.propTypes = {
    /**
    * user performance Data
    */
    data: PropTypes.shape({
        userId: PropTypes.number,
        data : PropTypes.array
    })
};
