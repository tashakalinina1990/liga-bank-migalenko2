import React from 'react';
import {connect} from 'react-redux';
import {getCreditType} from '../../store/credit-calc/selectors';
import {CREDIT_TYPE} from '../../const';
import PropTypes from 'prop-types';

const DurationRange = ({creditType}) => {
    return (
        <div  className="credit-calc__range">
            <input type="range" min={CREDIT_TYPE.CAR === creditType ? `1` : `5`} max={CREDIT_TYPE.CAR === creditType ? `5` : `30`} value={CREDIT_TYPE.CAR === creditType ? `1` : `5`} step="1" className="credit-calc__range-input" id="myRange" />
        </div>
    )
}

DurationRange.propTypes = {
    creditType: PropTypes.string
}

const mapStateToProps = (state) => {
    return {
        creditType: getCreditType(state)
    };
};

export default connect(mapStateToProps, null)(DurationRange);