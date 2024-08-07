import { useState } from 'react';

interface Answer {
    msg: string;
    color: string;
}

interface EightBallProps {
    answers: Answer[];
}

export default function EightBall({ answers }: EightBallProps) {
    const [color, setColor] = useState<string>('black');
    const [message, setMessage] = useState<string>('Think of a Question');

    const handleClick = () => {
        const randomIndex = Math.floor(Math.random() * answers.length);
        const randomAnswer = answers[randomIndex];
        setColor(randomAnswer.color);
        setMessage(randomAnswer.msg);
    };

    return (
        <div
            onClick={handleClick}
            style={{
                backgroundColor: color,
                width: '200px',
                height: '200px',
                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
                textAlign: 'center',
                cursor: 'pointer'
            }}
        >
            <p>{message}</p>
        </div>
    );
}
