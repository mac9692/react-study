import React from 'react';
import PropTypes from 'prop-types';

class TodaysPlan extends React.Component {
    render() {
        const {
            name,
            age,
            gender,
            addressObject,
            orderType
        } = this.props;
        return (
            <div className="message-container">
                <h1>이름 : {name}</h1>
                <h1>나이 : {age}</h1>
                <h1>성별 : {gender ? '남성' : '여성'}</h1>
                <h1>주소 : {addressObject.zipNo}</h1>
                <h1>주소상세 : {addressObject.dtlAddress}</h1>
                <h1>주문타입 : {orderType}</h1>
                {this.props.children}
            </div>
        );
    }
}

TodaysPlan.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    gender: PropTypes.bool,
    addressObject: PropTypes.shape({
        zipNo: PropTypes.string.isRequired,
        dtlAddress: PropTypes.string,
    }),
    children: PropTypes.node,
};

TodaysPlan.defaultProps = {
    orderType: '20',
}

export default TodaysPlan;