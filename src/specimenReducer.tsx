import {MAX_PAGE} from './constants/specimen';

const specimenReducerActions = {
    setLimit: 'SET_LIMIT',
    setPage: 'SET_PAGE',
    setIsFetching: 'SET_IS_FETCHING',
    setSpecimenData: 'ADD_SPECIMEN_DATA',
    updateSpecimenPatient: 'UPDATE_SPECIMEN_PATIENT'
}
  
const specimenReducer = (state:any, {type, payload}:any) => {
  if(state.isFetching && payload.isFetching) return {...state};
  
  switch(type) {
    case specimenReducerActions.setLimit:
      return {...state, limit: payload.limit, page: 0, specimenData: [...Array(payload.limit)]};

    case specimenReducerActions.setPage:
      if(payload.page<0 || payload.page>MAX_PAGE) return {...state};
      return {...state, page: payload.page, specimenData: [...Array(state.limit)]};
      
    case specimenReducerActions.setIsFetching:
      return {...state, isFetching: payload.isFetching};

    case specimenReducerActions.setSpecimenData:
      return {...state, specimenData: [...payload.specimenData]};

    case specimenReducerActions.updateSpecimenPatient:
      return {
        ...state,
        specimenData: state.specimenData.map((specimen:any) => {
          specimen.patient = specimen.id===payload.id ? payload.patient : specimen.patient
          return specimen;
        })
      };
  }
}

export { specimenReducer, specimenReducerActions }