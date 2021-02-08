import SpecimenType from './SpecimenType';
import Patient from './Patient';

interface Specimen {
    id: string,
    type: SpecimenType,
    collectedDateTime: string,
    patientID: string | undefined,
    patient: Patient | undefined
}

export default Specimen;