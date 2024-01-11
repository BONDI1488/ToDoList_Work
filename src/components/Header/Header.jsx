import React from 'react';
import {ReactComponent as User} from "../../images/account_avatar_face_man_people_profile_user_icon_123197.svg";
import classes from "./Header.module.scss";

const Header = () => {
    return (
        <header className='max-w-full h-72px py-[36px]'>
            <div className='max-w-screen-xl	mx-auto flex justify-between'>
                <div className='flex items-center'>
                    <button>
                        <div className="mr-5 w-10 h-10 bg-gradient-to-r from-gradientDark1 from-5% via-gradientDark2 via-35% to-gradientDark3 to-95% rounded-full border-bronzeDark border border-solid"></div>
                    </button>
                    <button>
                        <div className=" w-10 h-10 bg-gradient-to-r from-gradientDark1 from-5% via-gradientDark2 via-35% to-gradientDark3 to-95% rounded-full border-bronzeDark border border-solid"></div>
                    </button>
                </div>
                <div className='flex items-center '>
                    <button>
                        <User
                            width="80"
                            height="80"
                            className={classes.user}
                        />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;