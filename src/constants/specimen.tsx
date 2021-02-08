import SpecimenReducerState from '../interfaces/SpecimenReducerState';

const LIMIT_OPTIONS:Array<number> = [5, 10, 20, 50];
const MAX_PAGE:number = 50;

const SPECIMEN_REDUCER_INITIAL_STATE:SpecimenReducerState = {
    limit: LIMIT_OPTIONS[0],
    page: 0,
    specimenData: [...Array(LIMIT_OPTIONS[0])],
    isFetching: false
}

export { SPECIMEN_REDUCER_INITIAL_STATE, LIMIT_OPTIONS, MAX_PAGE }
