import { MAX_PAGE } from './constants/specimenNavMenu';
import { specimenReducerActions, FETCHING_PLACEHOLDER_COUNT } from './constants/specimenReducer';
import SpecimenReducerState from './interfaces/SpecimenReducerState';
import SpecimenReducerAction from './interfaces/SpecimenReducerAction';

const specimenReducer = (state:SpecimenReducerState, {type, payload}:SpecimenReducerAction) : SpecimenReducerState => {
  if(state.isFetching && type!==specimenReducerActions.SET_IS_FETCHING) return {...state};
  
  switch(type) {
    case specimenReducerActions.SET_LIMIT:
      return {...state, limit: payload.limit, page: 0, specimenData: [...Array(payload.limit)]};

    case specimenReducerActions.SET_PAGE:
      if(payload.page<0 || payload.page>MAX_PAGE) return {...state};
      return {...state, page: payload.page, specimenData: [...Array(FETCHING_PLACEHOLDER_COUNT)]};
      
    case specimenReducerActions.SET_IS_FETCHING:
      return {...state, isFetching: payload.isFetching};

    case specimenReducerActions.SET_SPECIMEN_FILTER:
      return {...state, specimenFilterList: payload.specimenFilterList};

    case specimenReducerActions.SET_SPECIMEN_DATA:
      return {...state, specimenData: [...payload.specimenData]};

    case specimenReducerActions.ADD_SPECIMEN_PATIENT:
      return {
        ...state,
        patientHash: {...state.patientHash, [payload.id] : payload.patient}
      };
    default:
      return {...state};
  }
}

export { specimenReducer, specimenReducerActions }