import React, { useCallback, useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import { Button, Loader, Wrapper } from '../../components';
import './style.scss';

export const RepositoriesDetails = () => {
    const { owner, repo } = useParams();
    const [repoInfo, setRepoInfo] = useState([]);
    const history = useHistory();

    const fetchApi = useCallback(() => {
        fetch(`https://api.github.com/repos/${owner}/${repo}`)
            .then(res => res.json())
            .then(data => setRepoInfo(data))
            .catch(console.error)
    }, [owner, repo])

    useEffect(() => {
        fetchApi();
        return () => {
            setRepoInfo([])
        }
    }, [fetchApi]);

    const formatData = (dataStr) => {
        let data = new Date(dataStr);
        return `${data.getMonth()}-${data.getDay()}-${data.getFullYear()}`
    }

    const handleClickOnButton = () => {
        history.goBack()
    }

    return (
        <Wrapper>
            <Button text='<' size='button--middle' onClick={handleClickOnButton} />
            <div className="details">
                {
                    Object.keys(repoInfo).length !== 0 ?
                        (
                            <>
                                <img className='details__avatar' src={repoInfo.owner.avatar_url} alt="avatar" />
                                <div className='details__str'>Name: {repoInfo.name}</div>
                                <div className='details__str'>Full Name: {repoInfo.full_name}</div>
                                <div className="details__str">Description : {repoInfo.description}</div>
                                <div className='details__str'>Url: {repoInfo.url}</div>
                                <div className='details__str'>Default Branch: {repoInfo.default_branch}</div>
                                <div className="details__str">Created At: {formatData(repoInfo.created_at)}</div>
                                <div className="details__str">Updated At: {formatData(repoInfo.updated_at)}</div>
                                <div className='details__str'>Watchers: {repoInfo.watchers}</div>

                            </>
                        )
                        : <Loader />
                }
            </div>

        </Wrapper>
    );
};
