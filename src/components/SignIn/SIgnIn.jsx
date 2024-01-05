import React, {useEffect, useRef} from 'react';
import anime from "animejs";

const SIgnIn = () => {

    const Test = useRef(null)

    useEffect(() => {
        anime({
            target: Test.current,
            translateX: 250,
            easing: 'easeInOutQuad',
            duration: 1000,
        })
    }, []);

    return (
        <div ref={Test}>
        <form
            className='font-custom m-auto rounded-2xl h-[358px] w-[400px]  bg-gradient-to-r from-gradientDark1 from-5% via-gradientDark2 via-35% to-gradientDark3 to-95%'>
            <p className='text-center  text-bronzeDark pt-5 text-6xl font-thin'>
                Sign in
            </p>
            <div className='flex justify-center pt-[32px]'>
                <input type="text"
                       className='px-3 rounded-lg  placeholder:text-inputTextPlaceholderDark outline-none bg-darkDark text-inputTextDark w-[350px] h-[45px] text-xl'
                       placeholder='username'
                />
            </div>
            <div className='flex justify-center pt-[32px]'>
                <input type="text"
                       className='px-3 rounded-lg  placeholder:text-inputTextPlaceholderDark outline-none bg-darkDark text-inputTextDark w-[350px] h-[45px] text-xl'
                       placeholder='password'
                />
            </div>
            <div className='flex justify-center pt-[32px]'>
                <button className='w-[350px] h-[45px] rounded-lg text-black bg-bronzeDark text-2xl'>
                    Sign in
                </button>
            </div>
        </form>
        </div>
    );
};

export default SIgnIn;