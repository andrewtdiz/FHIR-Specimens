import React, { useContext } from 'react';
import SpecimenBox from './SpecimenBox';
import SpecimenContext from '../../specimenContext';

export default function SpecimenDisplay() {
    const { specimenData } = useContext(SpecimenContext);
    return (
        <div className="pt-36 bg-gray-200 min-h-screen flex flex-col items-center">
            <div className="platform-container mt-8">
                <ul className="w-full md:w-1/2 mr-auto">
                    {specimenData.map((specimen:any, ind:any) => 
                        <li key={specimen ? specimen.id : ind}>
                            <SpecimenBox specimen={specimen} />
                        </li>
                    )} 
                </ul>
            </div>
        </div>
    )
}
