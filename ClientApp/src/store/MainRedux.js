import api from "../utilities/API"

const requestOffers = 'REQUEST_RELEASES';
const requestOffersFailure = 'REQUEST_RELEASES_FAILURE';
const receiveOffers = 'RECEIVE_RELEASES';

const APIErrorMessage = 'API Error';

const initialState = { releases: [], teams: [], features: [], defects: [] };

export const actionCreators = {
    requestOffers: () => async (dispatch) => {
        dispatch({ 
            type: requestOffers
        });
        return fetch('https://blah.com', {
            method: "GET",
            credentials: "include"
        })
        .then(response => response.clone().json())
        .then(data => { 
            dispatch({ 
                type: receiveOffers, payload: data 
            });
        }).catch(error => {
            dispatch({
                type: requestOffersFailure
            })
        })
    }
};

export const reducer = (state, action) => {
    state = state || initialState;

    switch(action.type){
        case requestOffers: 
            return {
                ...state,
            };

        case receiveOffers:
            return {
                ...state,
                offers: action.payload.data
            };

        //failures
        case requestOffersFailure:
            return {
                ...state,
                errorMessage: APIErrorMessage,
                isErrorSnackbarVisible: true
            };

        default: return state;
    };
};
