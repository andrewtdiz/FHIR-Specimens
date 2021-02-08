import {MAX_PAGE} from './constants/specimen';
import SpecimenReducerState from './interfaces/SpecimenReducerState';
import Specimen from './interfaces/Specimen';

const specimenReducerActions = {
    SET_LIMIT: 'SET_LIMIT',
    SET_PAGE: 'SET_PAGE',
    SET_IS_FETCHING: 'SET_IS_FETCHING',
    SET_SPECIMEN_DATA: 'SET_SPECIMEN_DATA',
    UPDATE_SPECIMEN_PATIENT: 'UPDATE_SPECIMEN_PATIENT'
};
  
const specimenReducer = (state:SpecimenReducerState, {type, payload}:any):SpecimenReducerState => {
  if(state.isFetching && type!==specimenReducerActions.SET_IS_FETCHING) return {...state};
  
  switch(type) {
    case specimenReducerActions.SET_LIMIT:
      return {...state, limit: payload.limit, page: 0, specimenData: [...Array(payload.limit)]};

    case specimenReducerActions.SET_PAGE:
      if(payload.page<0 || payload.page>MAX_PAGE) return {...state};
      return {...state, page: payload.page, specimenData: [...Array(state.limit)]};
      
    case specimenReducerActions.SET_IS_FETCHING:
      return {...state, isFetching: payload.isFetching};

    case specimenReducerActions.SET_SPECIMEN_DATA:
      return {...state, specimenData: [...payload.specimenData]};

    case specimenReducerActions.UPDATE_SPECIMEN_PATIENT:
      return {
        ...state,
        specimenData: state.specimenData.map((specimen:Specimen) => {
          specimen.patient = specimen.id===payload.id ? payload.patient : specimen.patient
          return specimen;
        })
      };
    default:
      return {...state};
  }
}

export { specimenReducer, specimenReducerActions }