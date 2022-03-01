import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

// recharts
import { ResponsiveContainer, RadialBarChart, RadialBar, PolarAngleAxis } from 'recharts';

// importData
import { getUserData } from '../../query';
import { userMapper } from '../../mapper/userMapper';

/** 
* Component that build the user's radial bar chart.
* @return { ScoreChart }
* Data for component ex: [{name: 'a', value: 12}]
*/
export default function ScoreChart() {

    const [score, setScore] = useState(null)
    const [isLoading, setIsLoading] = useState(false);
    const { userId } = useParams();

    useEffect(() => {
        getUserData(userId).then(data => {
            setScore(userMapper(data))
            setIsLoading(true);
        }).catch(err => {
            console.log(err)
            setIsLoading(false);
        })
    }, [userId]);

    const todayscore = score?.todayScore * 100
    //console.log(score)

    return (
        isLoading ? (
            <article className="scorechart">
                <div className="scorechart__background"></div>
                <div className="scorechart__score">{todayscore}%</div>
                <div className="scorechart__txt">de votre<br />objectif</div>
                {/** https://recharts.org/en-US/api/ResponsiveContainer */}
                <ResponsiveContainer height="100%" width="100%">
                    {/** https://recharts.org/en-US/api/RadialBarChart */}
                    <RadialBarChart
                        cx="50%"
                        cy="50%"
                        innerRadius={86}
                        outerRadius={100}
                        barSize={12}
                        data={[{ name: 'score', value: todayscore }]}
                        startAngle={-270}
                        endAngle={90}
                    >
                        {/** https://recharts.org/en-US/api/PolarAngleAxis */}
                        <PolarAngleAxis
                            type="number"
                            domain={[0, 100]}
                            angleAxisId={0}
                            tick={false}
                        />
                        {/** https://recharts.org/en-US/api/RadialBar */}
                        <RadialBar
                            background={false}
                            clockWise={true}
                            dataKey="value"
                            cornerRadius={15}
                            fill="#E60000"
                        />
                        {/** https://recharts.org/en-US/api/Text */}
                        <text
                            x={50}
                            y={50}
                            textAnchor="middle"
                            dominantBaseline="middle"
                            className="scorechart__label">
                            Score
                        </text>
                    </RadialBarChart>
                </ResponsiveContainer>
            </article>
        ) : ""
    )
}
