const fetchPatient = async (id:string) => {
    try {
      const res = await fetch(
        `http://hapi.fhir.org/baseR4/Patient/${id}/_history?_pretty=true`, 
        {
          method: 'GET',
          headers: {
            'Content-type': 'application/jhir+json',
          },
        }
      );
      const data = await res.json();
      const { birthDate, gender } = data.entry.slice(-1)[0].resource;
      return {birthDate, gender};
    } catch(err) {
      return { message: "Invalid patient" }
    }
}

export default fetchPatient