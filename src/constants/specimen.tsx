const LIMIT_OPTIONS = [5, 10, 20, 50];
const MAX_PAGE = 100;

const SPECIMEN_REDUCER_INITIAL_STATE = {
    limit: LIMIT_OPTIONS[0],
    page: 0,
    specimenData: [...Array(LIMIT_OPTIONS[0])],
    isFetching: false
}

export { SPECIMEN_REDUCER_INITIAL_STATE, LIMIT_OPTIONS, MAX_PAGE }
