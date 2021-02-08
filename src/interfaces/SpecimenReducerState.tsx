import Specimen from './Specimen';

interface SpecimenReducerState {
    limit: number,
    page: number,
    specimenData: Array<Specimen>,
    isFetching:boolean
}

export default SpecimenReducerState;