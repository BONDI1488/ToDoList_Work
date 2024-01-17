const initialState = {
    isModalOpen: false,
    isLoginForm: false,
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_MODAL':
            return {
                ...state,
                isModalOpen: !state.isModalOpen,
                isLoginForm: false,
            };
        case 'TOGGLE_FORM':
            return {
                ...state,
                isLoginForm: !state.isLoginForm,
            };
        default:
            return state;
    }
};

export default rootReducer;
