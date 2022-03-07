import React from 'react';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
//import { useParams } from 'react-router-dom';

// recharts
import { ResponsiveContainer, RadialBarChart, RadialBar, PolarAngleAxis } from 'recharts';

/**
* Component that build the user's radial bar chart.
* @param { number } todayscore
* @return { ScoreChart }
*/
export default function ScoreChart({ data }) {

    const [score, setScore] = useState({})

    useEffect(() => {
        setScore(data)
    }, [data]);

    /**
    * Build score %
    */
    const scorePerf = score * 100
    // console.log(data)

    return (
        <article className="scorechart">
            <div className="scorechart__background"></div>
            <div className="scorechart__score">{scorePerf}%</div>
            <div className="scorechart__txt">de votre<br />objectif</div>
            {/** https://recharts.org/en-US/api/ResponsiveContainer */}
            <ResponsiveContainer height="100%" width="100%">
                {/** https://recharts.org/en-US/api/RadialBarChart */}
                <RadialBarChart
                    cx="50%" // by default
                    cy="50%" // by default
                    innerRadius={86}
                    outerRadius={100}
                    barSize={12}
                    data={[{ name: 'scorePerf', value: scorePerf }]}
                    startAngle={-270}
                    endAngle={90}
                >
                    {/** https://recharts.org/en-US/api/PolarAngleAxis */}
                    <PolarAngleAxis
                        type="number"
                        domain={[0, 100]}
                        angleAxisId={0} // multiple bar axis
                        tick={false}
                    />
                    {/** https://recharts.org/en-US/api/RadialBar */}
                    <RadialBar
                        background={false}
                        dataKey={"value"}
                        cornerRadius={15}
                        fill="#E60000"
                    />
                    {/** https://recharts.org/en-US/api/Text */}
                    <text
                        x={40}
                        y={30}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        className="scorechart__label">
                        Score
                    </text>
                </RadialBarChart>
            </ResponsiveContainer>
        </article>
    )
}

ScoreChart.propTypes = {
    /**
    * user score Data
    */
    data:  PropTypes.number
};
