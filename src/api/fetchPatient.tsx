import FETCH_HEADER from '../constants/fetchHeader';

// Make an interface for patient
// Break this and see how it is handled
const fetchPatient = async (id:string) => {
  try {
    const res = await fetch(
      `http://hapi.fhir.org/baseR4/Patient/${id}/_history?_pretty=true`, 
      FETCH_HEADER
    );
    const { entry } = await res.json();
    const { 
      resource: 
        {
          birthDate,
          gender
        } 
    } = entry[entry.length-1];
    return {
      birthDate,
      gender
    };
  } catch {
    throw new Error();
  }
}

export default fetchPatient