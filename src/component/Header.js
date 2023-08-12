import { BiMenu } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import React, { useEffect, useState } from 'react';
import classes from './Header.module.scss';
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Header = () => {
    const history = useHistory();
    const [menuOpen, setMenuOpen] = useState(true);
    const [size, setsize] = useState({
        width: undefined,
        height: undefined,
    });
    useEffect(() => {
        const handleResize = () => {
            setsize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    useEffect(() => {
        if (size.width > 768 && menuOpen) {
            setMenuOpen(false);
        }
    }, [size.width, menuOpen]);
    const menuToggleHandler = () => {
        setMenuOpen((p) => !p);
    };
    const ctaClickHandler = () => {
        menuToggleHandler();
        history.push('/page-cta');
    };
    return (
        <header className={classes.header}>
            <div className={classes.header__content}>
                <Link to="/" className={classes.header__content__logo}>
                    Home
                </Link>
                <nav className={`${classes.header__content__nav} ${menuOpen && size.width < 768 ? classes.isMenu : ''}`}>
                    <ul>
                        <li>
                            <Link to="/Cover" onClick={menuToggleHandler}>
                                Cover
                            </Link>
                        </li>
                        <li>
                            <Link to="/Resume" onClick={menuToggleHandler}>
                                Resume
                            </Link>
                        </li>
                        <li>
                            <Link to="/Education" onClick={menuToggleHandler}>
                                Education
                            </Link>
                        </li>
                        <li>
                            <Link to="/Project" onClick={menuToggleHandler}>
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link to="/Skill" onClick={menuToggleHandler}>
                                Skills
                            </Link>
                        </li>
                        <li>
                            <Link to="/Info" onClick={menuToggleHandler}>
                                My Info
                            </Link>
                        </li>
                        <li>
                            <Link to="/Login" onClick={menuToggleHandler}>
                                Edit
                            </Link>
                        </li>
                    </ul>
                    <button onClick={ctaClickHandler}>Contact me</button>
                </nav>
                <div className={classes.header__content__toggle}>{!menuOpen ? <BiMenu onClick={menuToggleHandler} /> : <AiOutlineClose onClick={menuToggleHandler} />}</div>
            </div>
        </header>
    );
};

export default Header;
