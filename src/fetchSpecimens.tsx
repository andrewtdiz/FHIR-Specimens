const fetchSpecimens = async (count=20, offset=0) => {
    try {
      const res = await fetch(
        `http://hapi.fhir.org/baseR4/Specimen?_count=${count}&_offset=${offset+300}`, 
        {
          method: 'GET',
          headers: {
            'Content-type': 'application/jhir+json',
          },
        }
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
            id: id,
            type: type?.coding[0],
            collectedDateTime: collection?.collectedDateTime,
            patientID: subject?.reference.split('/')[1]
        }
      })
    } catch(err) {
      throw new Error(err);
    }
}

export default fetchSpecimens