import React, { useContext } from 'react';
import SpecimenBoxTable from './SpecimenBoxTable';
import SpecimenContext from '../specimenContext';
import { specimenReducerActions } from '../specimenReducer';
import fetchPatient from '../queries/fetchPatient';

const { updateSpecimenPatient, setIsFetching } = specimenReducerActions;

export default function SpecimenBox({specimen}:any) {
    const { dispatch } = useContext(SpecimenContext);

    const getPatient = async () => {
        if(specimen.patient) return;
        let patient = null;
        dispatch({
            type: updateSpecimenPatient, 
            payload: {
                patient: {loading: true},
                id: specimen.id
            }
        })
        dispatch({type: setIsFetching, payload: {isFetching: true}});
        if(specimen.patientID) patient = await fetchPatient(specimen.patientID);
        dispatch({type: setIsFetching, payload: {isFetching: false}});
        dispatch({
            type: updateSpecimenPatient, 
            payload: {
                patient: patient,
                id: specimen.id
            }
        })
    }

    return (
        <div className={"specimen-box " + ((specimen && specimen.patient?.birthDate) ? "specimen-box-clicked" : "specimen-box-not-clicked")}>
            {specimen 
            ?  <div onClick={getPatient}>
                    <div className="flex items-start w-full justify-between px-3">
                        <div>
                            <h1>Specimen</h1>
                            <h3 className="uppercase font-light text-sm text-gray-700">ID: {specimen.id}</h3>
                        </div>
                        <p className="text-xs text-gray-500">
                            <span className="font-medium">DateTime: </span>
                            {specimen.collectedDateTime || "N/A"}
                        </p>
                    </div>
                    <div className="flex mt-4">
                            {specimen.type 
                            ?   <SpecimenBoxTable label="Specimen.type" dataObj={specimen.type} />
                            :   <div className="w-1/2 flex flex-col justify-center items-center">

                                </div>
                            }
                            {specimen.patient 
                            ?   <SpecimenBoxTable label="Patient" dataObj={specimen.patient} />
                            :   <div className="flex-1 flex items-start justify-start px-3">
                                    <p className='text-xs text-gray-500'>Click to load patient info...</p>
                                </div>
                            }
                    </div>
                </div>
            :   <div className="px-3 animate-pulse flex space-x-4">
                    <div className="flex-1 space-y-4 py-1">
                        <div className="flex justify-between items-start">
                            <div className="h-4 bg-gray-300 rounded w-1/4"></div>
                            <div className="h-3 bg-gray-300 rounded w-1/6"></div>
                        </div>
                        <div className="h-3 bg-gray-300 rounded w-1/5"></div>
                        <div className="space-y-2">
                            <div className="h-4 bg-gray-300 rounded w-1/3"></div>
                            <div className="h-4 bg-gray-300 rounded w-1/3"></div>
                            <div className="h-4 bg-gray-300 rounded w-1/3"></div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}
