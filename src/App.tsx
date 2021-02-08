import React, { useReducer, useEffect } from 'react';
import './App.css';
import { SPECIMEN_REDUCER_INITIAL_STATE } from './constants/specimenReducer';
import { specimenReducer, specimenReducerActions } from './specimenReducer';
import fetchSpecimens from './api/fetchSpecimens';
import SpecimenContext from './specimenContext';
import SpecimenDisplay from './components/Specimen/SpecimenDisplay';
import Navbar from './components/Navbar';
import SpecimenNavMenu from './components/Specimen/SpecimenNavMenu';
import Specimen from './interfaces/Specimen';

const { SET_SPECIMEN_DATA, SET_IS_FETCHING } = specimenReducerActions;

function App() {
  const [state, dispatch] = useReducer(specimenReducer, SPECIMEN_REDUCER_INITIAL_STATE);
  
  // Consider a way to extract this useEffect to another component
  useEffect(() => {
    const getSpecimens = async () => {
      dispatch({type: SET_IS_FETCHING, payload: {isFetching: true}});
      const fetchedSpecimenData:Specimen = await fetchSpecimens(state.limit,state.limit*state.page);
      dispatch({type: SET_IS_FETCHING, payload: {isFetching: false}});
      dispatch(
        { 
          type: SET_SPECIMEN_DATA, 
          payload: { 
            specimenData: fetchedSpecimenData
          }
        }
      );
    }
    getSpecimens();
  }, [state.limit, state.page]);

  return (
    <SpecimenContext.Provider value={{...state, dispatch}}>
      <Navbar />
      <SpecimenNavMenu />
      <SpecimenDisplay testSpecimenData={null}/>
    </SpecimenContext.Provider>
  );
}

export default App;
