import React from 'react';

class StatePlan extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            formData: 'No Data',
        };

        this.handleData = this.handleData.bind(this);
        setTimeout(this.handleData, 4000);
    }

    handleData() {
        const data = 'new Data';
        const {formData} = this.state;

        this.setState({
            loading: false,
            formData: data + formData,
        });

        console.log('loading 변경', this.state.loading);
    }

    render() {
        return (
            <div>
                <h1>StateTest</h1>
                <h1>로딩 : {this.state.loading ? '로딩 중' : '로딩 실패'}</h1>
                <h1>로딩 : {this.state.formData}</h1>
            </div>
        );
    }
}

export default StatePlan;