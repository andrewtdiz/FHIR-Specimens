import React, {useContext} from 'react';
import { LIMIT_OPTIONS } from '../constants/specimen';
import './SpecimenNavMenu.css';
import SpecimenContext from '../specimenContext';
import { specimenReducerActions } from '../specimenReducer';

const {setLimit, setPage } = specimenReducerActions;

export default function SpecimenMenu() {
    const { limit, specimenData, page, dispatch } = useContext(SpecimenContext);
    return (
        <div className="fixed specimen-menu">
            <div className="platform-container flex items-center justify-between text-sm">
                <div className="flex items-center">
                    <p className="text-gray-600">{specimenData.length} results</p>
                    <button 
                        onClick={() => dispatch({type: setPage, payload: {page: page-1}})}
                        className={"button-outline transition-all duration-100 ease-in-out ml-menu-item " + (page===0 && 'button-disabled')}>
                            Previous Page
                    </button>
                    <p className="text-gray-600 ml-menu-item">Page {page+1}</p>
                    <button 
                        onClick={() => dispatch({type: setPage, payload: {page: page+1}})}
                        className={"button-outline transition-all duration-100 ease-in-out ml-menu-item " + (page===20 && 'button-disabled')}>
                            Next Page
                    </button>
                </div>
                <div>
                    <label htmlFor="limit" className="mr-3">Limit:</label>
                    <select name="limit" className="button-outline" value={limit} onChange={(e) => dispatch({type: setLimit, payload: {limit: Number(e.target.value)}})}>
                        {LIMIT_OPTIONS.map(option => 
                            <option 
                                key={option} 
                                className="text-black" 
                                value={option}>
                                    {option}
                            </option>
                        )}
                    </select>
                    <button className="button-outline transition-all duration-100 ease-in-out ml-menu-item">Filter options</button>
                </div>
            </div>
        </div>
        
    )
}
