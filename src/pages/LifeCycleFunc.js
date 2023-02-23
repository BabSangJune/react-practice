/* eslint-disable */
import React, { useState, useEffect } from 'react';

const LifeCycleFunc = () => {
    console.log('===== constructor =====')
    const [name, setName] = useState('');
    const [li, setLi] = useState();
    
    const getIdPromise = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('getIdPromise');
                resolve({ id: 'LifeCycleFunc' });
            }, 1000);
        });
    };
    const getNumbersPromise = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('getNumbersPromise');
                resolve({ data: [1, 2, 3, 4, 5] });
            }, 1000);
        });
    };
    
    useEffect(() => {
        console.log('===== componentDidMount =====');
        getIdPromise().then(res => {
            setName(res.id);
        });

        return () => {
            console.log('===== LifeCycleUnmountComponent =====');
        };
    }, []);
    
    useEffect(() => {
        if (!name) return;
        console.log('===== shouldComponentUpdate =====')
        getNumbersPromise().then(res => {
            setLi(res.data);
        });
        
        return () => {
            console.log('===== LifeCycleUnmountComponent =====');
        };
    }, [name]);
    
    return (
        <div>
            <a href="https://wavez.github.io/react-hooks-lifecycle/" target="_blank">Class Img</a>
            <h1>Hello! { `${ name }` }</h1>
            <ul>
                { li && li.map((item, index) => <li key={ index }>{ item }</li>) }
            </ul>
        </div>
    );
};

export default LifeCycleFunc;
