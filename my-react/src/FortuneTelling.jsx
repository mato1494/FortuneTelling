import { useState } from 'react';
import './fortunetelling.css';

const options = {month: 'long', day: 'numeric', weekday: 'short'};
const date = new Date().toLocaleDateString('ja-JP', options);

export default function FortuneTelling() {

    const [clicked, setClicked] = useState(false);
    const [result, setResult] = useState('');

    const fortuneClick = () => {
        if (!clicked) {
            const number = Math.floor(Math.random() * 100 + 1);
            
            let fortune = '';
            if (number > 90) {
                fortune = '大吉';
            } else if (number > 70) {
                fortune = '吉';
            } else if (number > 50) {
                fortune = '中吉';
            } else if (number > 30) {
                fortune = '小吉';
            } else if (number > 10) {
                fortune = '末吉';
            } else {
                fortune = '凶';
            }

            setResult(fortune);
            setClicked(true);
        }
    };

    return (
        <>
        <h1>{date}の運勢</h1>
        <button onClick={fortuneClick}>占ってみる！</button>
        {clicked && <p>今日の運勢は<span className='result'>{result}</span>です。</p>}
        </>
    );
}