import React from 'react';
import { RepositoriesItem, Pagination } from '..';
import PropTypes from 'prop-types';
import './style.scss';

export const RepositoriesGrid = (props) => {
    // картинку, название, рейтинг,
    const { list, numberOfPages } = props;

    return (
        <div className='repo'>
            {
                list && list.length > 0 ? (
                    <>
                        <h1 className='repo__title'>Repositories: </h1>
                        <ul className='repo__list'>
                            {
                                list.map(({ name, id, owner, stargazers_count }) => (
                                    <RepositoriesItem
                                        key={id}
                                        img={owner.avatar_url}
                                        rating={stargazers_count}
                                        id={id}
                                        ownerName={owner.login}
                                        repo={name}
                                    />
                                ))
                            }
                        </ul>
                        <Pagination numberOfPages={numberOfPages} />
                    </>
                ) : (<h1>Nothing found(</h1>)
            }
        </div>
    );
};

RepositoriesGrid.propTypes = {
    list: PropTypes.array,
}