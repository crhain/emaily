// SurveyFormReview shows users their form inputs for review
import React from 'react';
import _ from 'lodash';
import { connect }  from 'react-redux';
import formFields from './formFields';
//withRouter is used to progamatically switch to new routes
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';

const SurveyFormReview = ({onCancel, formValues, submitSurvey, history }) => {

    const reviewFields = _.map(formFields, ({name, label}) =>{
        return (
            <div key={name}>
                <label>{label}</label>
                <div>
                    {formValues[name]}
                </div>
            </div>
        );
    });

    return (
        <div>
            <h5>Please confirm your entries</h5>
            {reviewFields}                                   
            <button
                className="yellow darken-3 white-text btn-flat"
                onClick={onCancel}
            >
                Back
            </button>
            <button 
                className="green btn-flat white-text right"
                onClick={ () => submitSurvey(formValues, history) }
            >
                Send Survey
                <i className="material-icons right">email</i>
            </button>
        </div>
    );
};

function mapStateToProps({ form: { surveyForm: {values} } }) {
    //state.form.surveyForm.values
    return { formValues: values};
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));