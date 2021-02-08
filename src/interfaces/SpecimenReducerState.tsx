import Specimen from './Specimen';
import PatientHash from './PatientHash';

interface SpecimenReducerState {
    limit: number,
    page: number,
    specimenData: Array<Specimen>,
    patientHash: PatientHash,
    specimenFilterList: Array<(x:Specimen) => boolean>,
    isFetching: boolean
}

export default SpecimenReducerState;