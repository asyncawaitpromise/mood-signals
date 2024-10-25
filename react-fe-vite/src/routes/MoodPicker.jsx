import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const link =
    <Link
        style={{
            position: "fixed",
            top: 0,
            left: 0,
            margin: "1rem",
            boxSizing: "border-box"
        }}
        className='btn btn-primary' to="/">Go Home</Link>;

const MoodCard = (props) => {
    const {o} = props;
    return (
        <div style={{
                backgroundImage: `linear-gradient(#0001, #0009 50%), url(${o.img})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                aspectRatio: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px"
            }}>
            <p className='bg-[#0009] p-3 py-2'>{o.desc}</p>
            <button className='btn btn-primary'>Activate</button>
        </div>
    )
};

const MOOD_DATA = {
    img: "/happy.svg",
    desc: "Happy"
};
const MoodPicker = () => {
    const [moods, setMoods] = useState([]);

    const getDefaultMoods = async () => {
        return Array(1).fill(MOOD_DATA);
    };

    const getUserMoods = async () => {
        return Array(0).fill(MOOD_DATA);
    };

    useEffect(() => {
        (async () => {
            let moodsToSet = [];
            const defaultMoodsResponse = await getDefaultMoods();
            moodsToSet = moodsToSet.concat(defaultMoodsResponse);
            const userMoodsResponse = await getUserMoods();
            moodsToSet = moodsToSet.concat(userMoodsResponse);
            setMoods(moodsToSet);
        })();
    }, []);

    return (
        <div 
            style={{
                gridTemplateColumns: "repeat( auto-fill, minmax(200px, 1fr) )",
                gridTemplateRows: "auto",
                gridAutoRows: "1fr",
                gap: "5px",
                alignItems: "start",
                padding: "5px"
            }}
        className='
        MoodPicker max-w-screen-sm m-auto bg-[#333]
        min-h-dvh grid
        '>
            {link}
            {
                moods.map(moodObj => <MoodCard o={moodObj} />)
            }
        </div>
    )
}

export default MoodPicker;