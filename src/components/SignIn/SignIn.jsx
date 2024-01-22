import React, {useEffect, useRef} from 'react';
import anime from "animejs";
import {Formik} from "formik";
// import CloseBtn from '../../../public/icons8-close-50.png'

const SignIn = () => {

    const formSignInRef = useRef(null)

    useEffect(() => {
        anime({
            targets: formSignInRef.current,
            duration: 300,
            scale: [0.8, 1],
            easing: 'easeInOutQuad',
        })
    }, []);

    const handleFormSubmit = (values, { setSubmitting, resetForm }) => {
        const storedUserData = localStorage.getItem('user');

        if (storedUserData) {
            const parsedUserData = JSON.parse(storedUserData);
            if (values.email === parsedUserData.email && values.password === parsedUserData.password) {
                console.log('Авторизація успішна');
            } else {
                console.log('Невірна електронна пошта або пароль');
            }
        } else {
            console.log('Користувача з такою електронною поштою не знайдено');
        }
        setSubmitting(false);
        resetForm();
    };

    return (
        <div className="flex items-center justify-center w-screen h-screen">
            <Formik
                initialValues={{
                    email: '',
                    password: ''
                }}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'invalid email';
                    }
                    return errors;
                }}
                onSubmit={handleFormSubmit}

            >
                {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting,
                      resetForm,
                  }) => (
                    <form
                        onSubmit={handleSubmit}
                        ref={formSignInRef}
                        className='z-10 font-custom rounded-2xl h-[358px] w-[400px]  bg-gradient-to-r from-gradientDark1 from-5% via-gradientDark2 via-35% to-gradientDark3 to-95%'>
                         <p className='text-center  text-bronzeDark pt-5 text-6xl font-thin'>
                             Sign in
                         </p>
                         <div className='flex justify-center pt-[32px]'>
                             <input
                                    type="email"
                                    name="email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                    className='px-3 rounded-lg  placeholder:text-inputTextPlaceholderDark outline-none bg-darkDark text-inputTextDark w-[350px] h-[45px] text-xl'
                                    placeholder='email'
                             />
                         </div>
                         <p className=' left-3 text-red-400'>{errors.email && touched.email && errors.email}</p>
                         <div className='flex justify-center pt-[32px]'>
                             <input
                                    type="password"
                                    name="password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                    className='px-3 rounded-lg  placeholder:text-inputTextPlaceholderDark outline-none bg-darkDark text-inputTextDark w-[350px] h-[45px] text-xl'
                                    placeholder='password'
                             />
                         </div>
                         <p>{errors.password && touched.password && errors.password}</p>
                         <div className='flex justify-center pt-[32px]'>
                             <button
                                 type="submit"
                                 disabled={isSubmitting}
                                 className='w-[350px] h-[45px] rounded-lg text-black bg-bronzeDark text-2xl'
                             >
                                 Sign in
                             </button>
                         </div>
                    </form>
                )}

            </Formik>
        </div>
    );
};
export default SignIn;
