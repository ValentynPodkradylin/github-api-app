import React from 'react';
import { Button } from '../Button';
import { useSelector, useDispatch } from 'react-redux';
import { repositoriesActions } from './../../state/repositories';
import './style.scss';

export const Pagination = ({ numberOfPages }) => {
    const page = useSelector(state => state.repositories.page);
    const dispatch = useDispatch();

    const handleClickGoBack = () => {
        if (page !== 1) {
            dispatch(repositoriesActions.setPage(page - 1));
            window.scrollTo(0, -100);
        }
    }

    const handleClickGoForward = () => {
        if (page < numberOfPages) {
            dispatch(repositoriesActions.setPage(page + 1));
            window.scrollTo(0, -100);
        }
    }

    return (
        <div className='pagination'>
            <div className="pagination__arrowbtn">
                <Button text='<' size='button--large' onClick={handleClickGoBack} />
                <Button text='>' size='button--large' onClick={handleClickGoForward} />
            </div>
        </div>
    );
};
