// import React from 'react';
// import {connect} from 'react-redux';
// import RegistrationForm from '../SignUp/SignUp';
// import LoginForm from '../SignIn/SignIn';
// import classes from "./Modal.module.scss";
// // import CloseBtn from '../../../public/icons8-close-50.png'
// import Pencil from "../../images/icons8-pencil-50.png";
//
// const Modal = ({isModalOpen, isLoginForm, toggleModal, toggleForm}) => {
//     const handleClose = () => {
//         toggleModal();
//     };
//
//     if (!isModalOpen) {
//         return null;
//     }
//
//     return (
//         <div>
//             <div className={classes.modal}>
//                 <div className={classes.overlay}>
//                     {isLoginForm ? (
//                         <LoginForm/>
//                     ) : (
//                         <RegistrationForm toggleForm={toggleForm}/>
//                     )}
//                 </div>
//             </div>
//             <div className=''>
//                 <div className=''>
//                     <button onClick={handleClose} className='absolute top-0 bottom-0'>
//                         <img src='/icons8-close-50.png' width={30} height={30} alt=""/>
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };
//
// const mapStateToProps = (state) => ({
//     isModalOpen: state.isModalOpen,
//     isLoginForm: state.isLoginForm,
// });
//
// const mapDispatchToProps = (dispatch) => ({
//     toggleModal: () => dispatch({type: 'TOGGLE_MODAL'}),
//     toggleForm: () => dispatch({type: 'TOGGLE_FORM'}),
// });
//
// export default connect(mapStateToProps, mapDispatchToProps)(Modal);
//
//





import React from 'react';
import {connect} from 'react-redux';
import RegistrationForm from '../SignUp/SignUp';
import LoginForm from '../SignIn/SignIn';
import classes from "./Modal.module.scss";
// import CloseBtn from '../../../public/icons8-close-50.png'
import Pencil from "../../images/icons8-pencil-50.png";

const Modal = ({isModalOpen, isLoginForm, toggleModal, toggleForm}) => {
    const handleClose = () => {
        toggleModal();
    };

    if (!isModalOpen) {
        return null;
    }

    return (
        <div>
            <div className={classes.modal}>
                <div className={classes.overlay}>
                    {isLoginForm ? (
                        <LoginForm/>
                    ) : (
                        <RegistrationForm toggleForm={toggleForm}/>
                    )}
                </div>
            </div>
            {/*<div className=''>*/}
            {/*    <div className=''>*/}
            {/*        <button onClick={handleClose} className='absolute top-0 bottom-0'>*/}
            {/*            <img src='/icons8-close-50.png' width={30} height={30} alt=""/>*/}
            {/*        </button>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    );
};

const mapStateToProps = (state) => ({
    isModalOpen: state.isModalOpen,
    isLoginForm: state.isLoginForm,
});

const mapDispatchToProps = (dispatch) => ({
    toggleModal: () => dispatch({type: 'TOGGLE_MODAL'}),
    toggleForm: () => dispatch({type: 'TOGGLE_FORM'}),
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);



