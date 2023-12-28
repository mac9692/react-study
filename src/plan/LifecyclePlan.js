import React from 'react';

class LifecyclePlan extends React.Component {
    static getDerivedStateFromProps() {
        console.log(`getDerivedStateFromProps 호출`);
        return {};
    }
    constructor(props) {
        super(props);

        this.state = {};
        console.log(`constructor 호출`);
    }
    componentDidMount() {
        console.log(`componentDidMount 호출`);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(`componentDidUpdate 호출`);
    }
    componentWillUnmount() {
        console.log(`componentWillUnmount 호출`);
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log(`getSnapshotBeforeUpdate 호출`);
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log(`shouldComponentUpdate 호출`);
        return true;
    }

    render() {
        console.log(`render 호출`);
        return null;
    }
}

export default LifecyclePlan;