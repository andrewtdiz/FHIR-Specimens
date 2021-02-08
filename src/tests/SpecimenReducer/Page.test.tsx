import React, {useReducer} from 'react'
import { render, fireEvent } from '@testing-library/react'
import { specimenReducer } from '../../specimenReducer';
import { specimenReducerActions } from '../../specimenReducer';
import { SPECIMEN_REDUCER_INITIAL_STATE } from '../../constants/specimenReducer';

const { SET_PAGE } = specimenReducerActions;

const SpecimenReducerPage = ({changePageValue}: {changePageValue:number}) => {
    const [state, dispatch] = useReducer(specimenReducer, SPECIMEN_REDUCER_INITIAL_STATE);
    return (
        <div>
            <h1>{state.page}</h1>
            <button onClick={() => dispatch({type: SET_PAGE, payload: {page: changePageValue}})}>Change Page</button>
        </div>
    )
}

it('uses the reducer to change the limit value', () => {
    const { getByText } = render(<SpecimenReducerPage changePageValue={1}/>)
    expect(getByText('0')).toBeInTheDocument();
    fireEvent.click(getByText('Change Page'))
    expect(getByText('1')).toBeInTheDocument();
  })


