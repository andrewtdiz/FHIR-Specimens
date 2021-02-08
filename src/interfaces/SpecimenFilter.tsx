import Specimen from './Specimen';

interface SpecimenFilter {
    name: string,
    displayText: string | undefined,
    func: (specimen:Specimen) => boolean
}

export default SpecimenFilter