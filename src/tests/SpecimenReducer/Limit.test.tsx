import React, {useReducer} from 'react'
import { render, fireEvent } from '@testing-library/react'
import { specimenReducer } from '../../specimenReducer';
import { specimenReducerActions } from '../../specimenReducer';
import { SPECIMEN_REDUCER_INITIAL_STATE } from '../../constants/specimenReducer';

const { SET_LIMIT } = specimenReducerActions;

const SpecimenReducerLimit = ({changeLimitValue}: {changeLimitValue:number}) => {
    const [state, dispatch] = useReducer(specimenReducer, SPECIMEN_REDUCER_INITIAL_STATE);
    return (
        <div>
            <h1>{state.limit}</h1>
            <button onClick={() => dispatch({type: SET_LIMIT, payload: {limit: changeLimitValue}})}>Change Limit</button>
        </div>
    )
}

it('uses the reducer to change the limit value', () => {
    const { getByText } = render(<SpecimenReducerLimit changeLimitValue={10}/>)
    expect(getByText('5')).toBeInTheDocument();
    fireEvent.click(getByText('Change Limit'))
    expect(getByText('10')).toBeInTheDocument();
  })


