import React from 'react';
import { connect } from 'react-redux';
import RegistrationForm from '../SignUp/SignUp';
import LoginForm from '../SignIn/SignIn';
import classes from "./Modal.module.scss";
// import CloseBtn from '../../../public/icons8-close-50.png'
import Pencil from "../../images/icons8-pencil-50.png";

const Modal = ({ isModalOpen, isLoginForm, toggleModal, toggleForm }) => {
    const handleClose = () => {
        toggleModal();
    };

    if (!isModalOpen) {
        return null;
    }

    return (
        <div className="fixed top-0 left-0 flex items-center justify-center">
            <div className={"relative"}>
                {isLoginForm ? (
                    <LoginForm/>
                ) : (
                    <RegistrationForm toggleForm={toggleForm} />
                )}
                <button onClick={handleClose} className='absolute top-[100px]'>
                    <img src='/icons8-close-50.png' width={30} height={30} alt=""/>
                </button>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    isModalOpen: state.isModalOpen,
    isLoginForm: state.isLoginForm,
});

const mapDispatchToProps = (dispatch) => ({
    toggleModal: () => dispatch({ type: 'TOGGLE_MODAL' }),
    toggleForm: () => dispatch({ type: 'TOGGLE_FORM' }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
