import React, { useState, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { API_URL, SELECT_VAL } from '../../constants';
import { repositoriesActions } from '../../state/repositories';
import {
    Loader,
    RepositoriesGrid,
    Search,
    Wrapper,
    Select
} from './../../components';


export const Main = () => {
    const repositories = useSelector(state => state.repositories.repositories);
    const q = useSelector(state => state.repositories.q);
    const page = useSelector(state => state.repositories.page);
    const sortBy = useSelector(state => state.repositories.sortBy);
    const [pages, setPages] = useState();

    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);

    let repo = repositories;

    const fetchApi = useCallback(async () => {
        await fetch(`${API_URL}?q=${q}&per_page=30&page=${page}`)
            .then(response => response.json())
            .then(data => {
                dispatch(repositoriesActions.setRepositories(data.items));
                setPages(Math.ceil(data.total_count / 30));
            })
            .then(() => setIsLoading(false))
            .catch(console.error);
    }, [dispatch, q, page]);

    useEffect(() => {
        if (q !== '') {
            setIsLoading(true);
            fetchApi();
        }


    }, [fetchApi, q])

    const handleChangeInput = (text) => {
        dispatch(repositoriesActions.setQ(text));
        dispatch(repositoriesActions.setPage(1));
    };

    const onChangeSelect = (event) => {
        switch (event.target.value) {
            case SELECT_VAL.name:
                repo.sort((a, b) => a.name > b.name ? 1 : -1);
                dispatch(repositoriesActions.setSort(SELECT_VAL.name));
                break;
            case SELECT_VAL.data:
                repo.sort((a, b) => new Date(b.created_at) - new Date(a.created_at) ? -1 : 1);
                dispatch(repositoriesActions.setSort(SELECT_VAL.data));
                break;
            case SELECT_VAL.watchers:
                repo.sort((a, b) => a.watchers > b.watchers ? 1 : -1);
                dispatch(repositoriesActions.setSort(SELECT_VAL.watchers));
                break;
            default:
                dispatch(repositoriesActions.setSort(SELECT_VAL.nothing));
                break;
        }
    }

    return (
        <Wrapper>
            <Search onChangeInput={handleChangeInput} />
            {/* ------ */}

            {
                q !== '' ?
                    <Select
                        labelText='Sorted by: '
                        id='sortedBy'
                        name='sort'
                        onChange={onChangeSelect}
                        value={sortBy}
                    >
                        {/* watchers */}
                        <option value={SELECT_VAL.name}>Name</option>
                        <option value={SELECT_VAL.data}>Data(Create)</option>
                        <option value={SELECT_VAL.watchers}>Watchers</option>
                        <option value={SELECT_VAL.nothing}>...</option>
                    </Select>
                    : <div />
            }


            {
                isLoading
                    ? <Loader />
                    : (
                        <>
                            <RepositoriesGrid
                                numberOfPages={pages}
                                list={repo}
                            />
                        </>
                    )
            }
        </Wrapper>
    );
};