import FETCH_HEADER from '../constants/fetchHeader';

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
    } = entry.slice(-1)[0];
    return {birthDate, gender};
  } catch(err) {
    return { message: "Invalid patient" }
  }
}

export default fetchPatient