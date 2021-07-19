import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Wrapper, Button } from '../../components';
import './style.scss';
import { PATHS } from '../../constants';

export const Saved = () => {

    const [storageList, setStorageList] = useState([]);
    const history = useHistory();
    const { repodetail } = PATHS;

    const allStorage = () => {
        let values = [],
            keys = Object.keys(localStorage),
            i = keys.length;

        while (i--) {
            values.push(localStorage.getItem(keys[i]));
        }

        return values;
    }

    const handleClearStorage = () => {
        localStorage.clear();
        setStorageList([]);
    }

    useEffect(() => {
        setStorageList(allStorage());
    }, [])

    const onClickLink = (repo) => {
        repo = JSON.parse(repo);
        history.push(`${repodetail}/${repo.ownerName}/${repo.repo}`)
    }

    return (
        <Wrapper>
            <div className="saved">
                <h1 className='saved__title'>Name of the repository and his owner</h1>
                {
                    storageList.length > 0
                        ? (
                            <ol className="saved__list">
                                {
                                    storageList.map((item, index) => (
                                        <li 
                                            className="saved__item" 
                                            key={index}
                                            onClick={() => onClickLink(item)}
                                        >
                                            {`Repository name: ${JSON.parse(item).repo} --- Owner name: ${JSON.parse(item).ownerName}`}
                                        </li>
                                    ))
                                }

                            </ol>
                        )

                        : (<div style={{ margin: '2rem 0'}}>nothing saved</div>)
                }


                <Button text='clear storage' onClick={handleClearStorage} />
            </div>
        </Wrapper>
    );
};
