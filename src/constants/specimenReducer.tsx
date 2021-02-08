import SpecimenReducerState from '../interfaces/SpecimenReducerState';
import {specimenFilters} from './specimenFilter';
import {LIMIT_OPTIONS} from './specimenNavMenu';

const FETCHING_PLACEHOLDER_COUNT = 3;

const specimenReducerActions = {
    SET_LIMIT: 'SET_LIMIT',
    SET_PAGE: 'SET_PAGE',
    SET_IS_FETCHING: 'SET_IS_FETCHING',
    SET_SPECIMEN_DATA: 'SET_SPECIMEN_DATA',
    SET_SPECIMEN_FILTER: 'SET_SPECIMEN_FILTER',
    ADD_SPECIMEN_PATIENT: 'ADD_SPECIMEN_PATIENT'
};

const SPECIMEN_REDUCER_INITIAL_STATE:SpecimenReducerState = {
    limit: LIMIT_OPTIONS[0],
    page: 0,
    specimenData: [...Array(LIMIT_OPTIONS[0])],
    patientHash: {},
    specimenFilterList: [specimenFilters.SPECIMEN_ALL.func],
    isFetching: false,
}

export { SPECIMEN_REDUCER_INITIAL_STATE, specimenReducerActions, FETCHING_PLACEHOLDER_COUNT }
