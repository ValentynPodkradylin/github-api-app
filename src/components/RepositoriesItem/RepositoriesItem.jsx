import React from 'react';
import './style.scss';
import { useHistory } from 'react-router';
import { PATHS } from '../../constants';
import { Button } from '../Button';

export const RepositoriesItem = (props) => {
    const { img, rating, ownerName, repo } = props;
    // до этого момента никак не сталкивался в LocalStorage не уверен что реализация правильная 
    const [isSave, setIsSave] = React.useState(() => localStorage.getItem(`repo:${repo}`));
    let history = useHistory();

    const handleButtonClick = () => {
        history.push(`${PATHS.repodetail}/${ownerName}/${repo}`)
    }

    const onClickBookmark = () => {
        localStorage.setItem(`repo:${repo}`, JSON.stringify({
            repo,
            ownerName,
        }));
        // localStorage.setItem(`repo:${repo}`, repo);
        setIsSave(!isSave);
    }

    return (
        <li className='card'>
            <div className="card__img">
                <img src={img} alt={img} />
            </div>
            <div className="card__body">
                <div className="card__name">Repository name: {repo}</div>
                <div className="card__rating">Rating: {rating}</div>
                <div className="card__owner-name">Owner name: {ownerName}</div>
                <div className='card__footer'>
                    <Button text='view more' size='button--medium' onClick={handleButtonClick} />
                    <i onClick={onClickBookmark} className={` ${isSave ? 'fas' : 'far'} fa-bookmark`}></i>
                </div>
            </div>
            {/* <Link to={`${PATHS.repodetail}/${ownerName}/${repo}`}>click</Link> */}
        </li>
    );
};

