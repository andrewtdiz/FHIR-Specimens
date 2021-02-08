import React, { useContext } from 'react';
import SpecimenBox from './SpecimenBox';
import SpecimenContext from '../../specimenContext';
import Specimen from '../../interfaces/Specimen';
import {filterSpecimenData} from '../../constants/specimenFilter';

interface SpecimenDisplayProps {
    testSpecimenData: Array<Specimen> | null
}

export default function SpecimenDisplay({testSpecimenData}:SpecimenDisplayProps) {
    const { specimenFilterList, specimenData } = useContext(SpecimenContext);

    const displaySpecimenData:Array<Specimen> = process.env.NODE_ENV==='test' 
        ? (testSpecimenData===null ? [] : testSpecimenData) 
        : filterSpecimenData(specimenData, specimenFilterList);

    return (
        <div className="pt-36 bg-gray-200 min-h-screen flex flex-col items-center">
            <div className="platform-container mt-8">
                <ul className="w-full md:w-1/2 mr-auto">
                    {displaySpecimenData.length>0 
                    ?   displaySpecimenData.map((specimen:Specimen, ind:number) => 
                            <li key={specimen ? specimen.id : ind}>
                                <SpecimenBox specimen={specimen} testPatientHash={null}/>
                            </li>
                        )
                    :   <h1>No specimens found! Try changing your filter options</h1>} 
                </ul>
            </div>
        </div>
    )
}
