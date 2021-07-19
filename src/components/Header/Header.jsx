import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import './style.scss';
import { PATHS } from '../../constants';

export const Header = () => {
    const  history = useHistory();
    const { pathname } = useLocation();
    const { saved, main } = PATHS;

    const onClickClick = (path) => {
        history.push(path);
    }

    return (
        <div>
            <header className='header'>
                <div className="header__inner">
                    <div className="header__title" onClick={() => onClickClick(main)}>SPA</div>
                    <nav className="header__nav nav">
                        <ul className="nav__list">
                            <li onClick={() => onClickClick(saved)} className="nav__item nav__item--bookmark">
                                <i className={`${pathname === saved ? 'fas' : 'far'} fa-bookmark`} />
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    );
};
