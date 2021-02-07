const LIMIT_OPTIONS = [3, 5, 10, 20];
const MAX_PAGE = 100;

const SPECIMEN_REDUCER_INITIAL_VALUE = {
    limit: LIMIT_OPTIONS[0],
    page: 0,
    specimenData: [...Array(LIMIT_OPTIONS[0])],
    isFetching: false
}

export { SPECIMEN_REDUCER_INITIAL_VALUE, LIMIT_OPTIONS, MAX_PAGE }
