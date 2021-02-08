import React, {useContext} from 'react';
import { LIMIT_OPTIONS, MAX_PAGE } from '../../constants/specimenNavMenu';
import './SpecimenNavMenu.css';
import SpecimenContext from '../../specimenContext';
import FilterButton from '../Filterbutton';
import { specimenReducerActions } from '../../specimenReducer';
import {filterSpecimenData} from '../../constants/specimenFilter';

const { SET_LIMIT, SET_PAGE } = specimenReducerActions;

export default function SpecimenMenu() {
    const { limit, specimenFilterList, specimenData, page, dispatch } = useContext(SpecimenContext);

    return (
        <div className="fixed specimen-menu">
            <div className="platform-container flex items-center justify-between text-sm">
                <div className="flex items-center">
                    <p className="text-gray-600">
                        {specimenData[0]===undefined ? 'Loading' : filterSpecimenData(specimenData, specimenFilterList).length}
                        results
                    </p>
                    <button 
                        onClick={() => dispatch({type: SET_PAGE, payload: {page: page-1}})}
                        className={"button-outline ml-menu-item " + (page===0 && 'button-disabled')}>
                            Previous Page
                    </button>
                    <p className="text-gray-600 ml-menu-item">Page {page+1}</p>
                    <button 
                        onClick={() => dispatch({type: SET_PAGE, payload: {page: page+1}})}
                        className={"button-outline ml-menu-item " + (page===MAX_PAGE && 'button-disabled')}>
                            Next Page
                    </button>
                </div>
                <div className="flex items-center">
                    <label htmlFor="limit" className="mr-3">Limit:</label>
                    <select name="limit" className="button-outline cursor-pointer" value={limit} onChange={(e) => dispatch({type: SET_LIMIT, payload: {limit: Number(e.target.value)}})}>
                        {LIMIT_OPTIONS.map((option:number) => 
                            <option 
                                key={option} 
                                className="text-black" 
                                value={option}>
                                    {option}
                            </option>
                        )}
                    </select>
                    <FilterButton />
                </div>
            </div>
        </div>
        
    )
}
