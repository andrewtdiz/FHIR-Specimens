import React, { useState, useContext } from 'react'
import {specimenFilters} from '../constants/specimenFilter';
import SpecimenContext from '../specimenContext';
import { specimenReducerActions } from '../constants/specimenReducer';
import Specimen from '../interfaces/Specimen';

const { SET_SPECIMEN_FILTER } = specimenReducerActions;

export default function Filterbutton() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const { specimenFilterList, dispatch } = useContext(SpecimenContext);

    const updateFilter = ({target: {checked}}: React.ChangeEvent<HTMLInputElement>, func: (specimen:Specimen) => boolean) => {
        if(checked) dispatch({
            type: SET_SPECIMEN_FILTER, 
            payload: {
                specimenFilterList: [...specimenFilterList, func]
            }
        })
        else dispatch({
            type: SET_SPECIMEN_FILTER, 
            payload: {
                specimenFilterList: specimenFilterList.filter(
                    (specimenFilter:(specimen:Specimen) => boolean) => specimenFilter !== func
                )
            }
        })
    }

    const toggleOpen = () => {
        console.log('here i am');
        setIsOpen(prev => !prev);
    };

    return (
        <div className="relative">
            <button onClick={toggleOpen} className="button-outline ml-menu-item">Filter options</button>
            <div className={`modal-dropdown top-100 right-0 transform ${isOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-4 pointer-events-none"}`}>
                <p className="font-light mb-4 text-gray-600 text-xs">FILTER BY</p>
                {Object.values(specimenFilters).map(value => 
                value.displayText &&
                    <label key={value.name} htmlFor="hasSpecimen" className="flex items-center mb-4">
                        <input 
                            name="hasSpecimen" 
                            type="checkbox" 
                            checked={specimenFilterList.includes(value.func)} 
                            onChange={(e) => updateFilter(e, value.func)}
                        />
                        <h2 className="ml-6 text-base">{value.displayText}</h2>
                    </label>
                )}
            </div>
        </div>
    )
}
