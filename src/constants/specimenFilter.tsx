import Specimen from '../interfaces/Specimen';
import SpecimenFilterDictionary from '../interfaces/SpecimenFilterDictionary';

const specimenFilters:SpecimenFilterDictionary = {
    SPECIMEN_ALL: {
        name: 'SPECIMEN_ALL',
        displayText: undefined,
        func: () => true,
    },
    SPECIMEN_TYPE: {
        name: 'SPECIMEN_TYPE',
        displayText: 'Specimen Type',
        func:(specimen:Specimen) => specimen.type!==undefined,
    },
    SPECIMEN_DATETIME: {
        name: 'SPECIMEN_DATETIME',
        displayText: 'DateTime',
        func: (specimen:Specimen) => specimen.collectedDateTime!==undefined,
    },
}

const filterSpecimenData = (specimenData:Array<Specimen>, specimenFilterList:Array<(specimen:Specimen) => boolean>) => {
    return specimenData.filter((specimen:Specimen) => {
        if(specimen===undefined) return true
        for(let func of specimenFilterList) {
            if(!func(specimen)) return false;
        }
        return true
    });
}

export { specimenFilters, filterSpecimenData };