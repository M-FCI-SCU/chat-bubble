import { useState, useEffect } from 'react';

type TimerProps ={
    isActive: boolean
}

export default function Timer({isActive}:TimerProps){

    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        let interval: any;

        if (isActive) {
            interval = setInterval(() => {
                setSeconds((prevSeconds) => prevSeconds + 1);
            }, 1000);
        }

        return () => {
            clearInterval(interval);
            setSeconds(0)
        }
    }, [isActive]);


    return (
        <span style={{fontWeight:"bold", marginRight: 2, marginLeft: 4, fontSize: 17}}>{seconds >= 10 ? seconds : `0${seconds}`}</span>
    );
};