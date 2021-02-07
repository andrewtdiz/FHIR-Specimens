import React, { useReducer, useEffect } from 'react';
import './App.css';
import { SPECIMEN_REDUCER_INITIAL_STATE } from './constants/specimen';
import { specimenReducer, specimenReducerActions } from './specimenReducer';
import fetchSpecimens from './queries/fetchSpecimens';
import SpecimenContext from './specimenContext';
import SpecimenDisplay from './components/SpecimenDisplay';
import Navbar from './components/Navbar';
import SpecimenNavMenu from './components/SpecimenNavMenu';

const { setSpecimenData, setIsFetching } = specimenReducerActions;

function App() {
  const [{ limit, page, specimenData, isFetching }, dispatch] = useReducer(specimenReducer, SPECIMEN_REDUCER_INITIAL_STATE);
  
  useEffect(() => {
    const getSpecimens = async () => {
      dispatch({type: setIsFetching, payload: {isFetching: true}});
      const fetchedSpecimenData = await fetchSpecimens(limit,limit*page);
      dispatch({type: setIsFetching, payload: {isFetching: false}});
      dispatch(
        { type: setSpecimenData, 
          payload: { 
            specimenData: fetchedSpecimenData
          }
        }
      );
    }
    getSpecimens()
  }, [limit, page])

  return (
    <SpecimenContext.Provider value={{limit, page, specimenData, isFetching, dispatch}}>
      <div>
        <Navbar />
        <SpecimenNavMenu />
        <SpecimenDisplay />
      </div>
    </SpecimenContext.Provider>
  );
}

export default App;
