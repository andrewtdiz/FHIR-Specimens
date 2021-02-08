import SpecimenType from './SpecimenType';

interface Specimen {
    id: string,
    type: SpecimenType,
    collectedDateTime: string,
    patientID: string | undefined,
}

export default Specimen;