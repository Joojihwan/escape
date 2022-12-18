import React from 'react';
import { useNavigate } from 'react-router-dom';

function Toast() {
    const navigate = useNavigate();
    let count = 0;
    const counting = setInterval(() => {
        count += 1;
        if(count === 3) {
            clearInterval(counting);
            navigate('/search');
        }
    },1000);

    return (
        <div className='toast'>
            <div>
                <p>Slainte</p>
                <p>잔에 담긴 하나의 작품</p>
            </div>
        </div>
    );
}

export default Toast;