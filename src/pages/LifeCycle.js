/* eslint-disable */
import React, { Component } from 'react';

class LifeCycle extends React.Component {
    constructor(props) {
        console.log('===== constructor =====');
        super(props);

        this.state = {
            list: [],
            id: null,
        };

        this.getIdPromise = this.getIdPromise.bind(this);
    }

    componentDidMount() {
        console.log('===== componentDidMount =====');
        this.getIdPromise().then(res => {
            this.setState({
                id: res.id,
            });
        });
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('===== shouldComponentUpdate =====');
        console.log('nextState: ', this.state, nextState);

        return nextState.id;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('===== componentDidUpdate =====');
        console.log('prevProps: ', prevProps);
        console.log('prevState: ', prevState);
        console.log('snapshot: ', snapshot);

        if (prevState.id !== this.state.id) {
            this.getNumbersPromise(this.state.id).then(res => {
                this.setState({ list: res.data });
            });
        }
    }

    getIdPromise() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('getIdPromise');
                resolve({ id: 'LifeCycle' });
            }, 5000);
        });
    }

    getNumbersPromise(id) {
        const data = {
            LifeCycle: [1, 2, 3, 4, 5],
        };

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({ data: data[id] });
            }, 1000);
        });
    }

    render() {
        console.log('===== RENDER =====');
        console.log('this.state: ', this.state);

        return (
            <>
                <h1>Hello! {this.state.id}</h1>
                <ul>
                    {this.state.list.map(num => (
                        <li key={num}>{num}</li>
                    ))}
                </ul>
            </>
        );
    }
}

export default LifeCycle;
