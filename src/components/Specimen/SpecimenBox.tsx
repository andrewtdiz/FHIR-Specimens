import React, { useContext } from 'react';
import SpecimenBoxTable from './SpecimenBoxTable';
import SpecimenContext from '../../specimenContext';
import { specimenReducerActions } from '../../specimenReducer';
import fetchPatient from '../../api/fetchPatient';
import Specimen from '../../interfaces/Specimen';
import Patient from '../../interfaces/Patient';
import PatientHash from '../../interfaces/PatientHash';

const { ADD_SPECIMEN_PATIENT, SET_IS_FETCHING } = specimenReducerActions;

interface SpecimenBoxProps {
    specimen:Specimen,
    testPatientHash: PatientHash | null
}

export default function SpecimenBox({specimen, testPatientHash}:SpecimenBoxProps) {
    const { patientHash, dispatch } = useContext(SpecimenContext);
    const patient:Patient = process.env.NODE_ENV==='test' ? (testPatientHash && testPatientHash[specimen.id]) : (specimen ? patientHash[specimen.id] : undefined);

    const getPatient = async () => {
        // Functionality
        if(patient) return;
        let patientFetched = null;
        dispatch({
            type: ADD_SPECIMEN_PATIENT, 
            payload: {
                patient: {loading: true},
                id: specimen.id
            }
        });
        dispatch({type: SET_IS_FETCHING, payload: {isFetching: true}});
        if(specimen.patientID) patientFetched = await fetchPatient(specimen.patientID);
        dispatch({type: SET_IS_FETCHING, payload: {isFetching: false}});
        dispatch({
            type: ADD_SPECIMEN_PATIENT, 
            payload: {
                patient: patientFetched,
                id: specimen.id
            }
        })
    };

    return (
        <div className={"specimen-box " + ((patient) ? "specimen-box-clicked" : "specimen-box-not-clicked")}>
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
                            :   <div className="flex-1 flex flex-col justify-center items-center">

                                </div>
                            }
                            {patient 
                            ?   <SpecimenBoxTable label="Patient" dataObj={patient} />
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
