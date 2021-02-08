import FETCH_HEADER from '../constants/fetchHeader';

const fetchSpecimens = async (count=1, offset=0) => {
  try {
    const res = await fetch(
      `http://hapi.fhir.org/baseR4/Specimen?_count=${count}&_offset=${offset}`, 
      FETCH_HEADER
    );
    const {entry} = await res.json();
    return entry.map((specimen:any) => {
      const { 
          resource: {
              id,
              type,
              collection,
              subject
          } 
      } = specimen;
      return {
        id,
        type: type?.coding[0],
        collectedDateTime: collection?.collectedDateTime,
        patientID: subject?.reference.split('/')[1]
      };
    })
  } catch(err) {
    throw new Error(err);
  }
}

export default fetchSpecimens