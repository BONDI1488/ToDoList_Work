import React, {useEffect, useRef} from 'react';
import anime from "animejs";
import {Formik} from "formik";

const SignUp = () => {
    const formSignUpRef = useRef(null)

    useEffect(() => {
        anime({
            targets: formSignUpRef.current,
            // rotate: '1turn', // 1turn еквівалентно 360 градусам
            // easing: 'easeInOutQuad',
            // duration: 1000,
        })
    }, []);

    return (
        <div>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    username: '',
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
                onSubmit={(values, {setSubmitting}) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting,
                  }) => (
                    <form
                        ref={formSignUpRef}
                        onSubmit={handleSubmit}
                        className='font-custom m-auto rounded-2xl h-[505px] w-[400px] mt-6 bg-gradient-to-r from-gradientDark1 from-5% via-gradientDark2 via-35% to-gradientDark3 to-95%'
                    >
                        <p className='text-center  text-bronzeDark pt-5 text-6xl font-thin'>
                            Sign up
                        </p>
                        <div className='flex justify-center pt-[32px]'>
                            <input
                                type="text"
                                name="name"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name}
                                className='px-3 rounded-lg  placeholder:text-inputTextPlaceholderDark outline-none bg-darkDark text-inputTextDark w-[350px] h-[45px] text-xl'
                                placeholder='name'
                            />
                        </div>
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
                        <div className='flex justify-center pt-[32px]'>
                            <input
                                type="text"
                                name="username"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.username}
                                className='px-3 rounded-lg  placeholder:text-inputTextPlaceholderDark outline-none bg-darkDark text-inputTextDark w-[350px] h-[45px] text-xl'
                                placeholder='username'
                            />
                        </div>
                        {/*<p className=' left-3 text-red-400'>{errors.email && touched.email && errors.email}</p>*/}
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
                                Sign up
                            </button>
                        </div>
                    </form>
                )}
            </Formik>
        </div>
    );
};

export default SignUp;