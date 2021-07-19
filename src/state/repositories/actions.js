export const repositoriesActionTypes = {
    SET_REPOSITORIES: 'REPOSITORIES.SET_REPOSITORIES',
    SET_Q: 'REPOSITORIES.SET_Q',
    SET_PAGE: 'REPOSITORIES.SET_PAGE',
    SET_SORT: 'REPOSITORIES.SET_SORT',
}

export const repositoriesActions = {
    setRepositories: (payload) => ({ type: repositoriesActionTypes.SET_REPOSITORIES, payload }),
    setQ: (payload) => ({ type: repositoriesActionTypes.SET_Q, payload }),
    setPage: (payload) => ({ type: repositoriesActionTypes.SET_PAGE, payload }),
    setSort: (payload) => ({ type: repositoriesActionTypes.SET_SORT, payload })
}