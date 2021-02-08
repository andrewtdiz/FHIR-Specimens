import React from 'react'
import { render } from '@testing-library/react'
import SpecimenBox from '../components/Specimen/SpecimenBox'
import Specimen from '../interfaces/Specimen';
import SpecimenType from '../interfaces/SpecimenType';
import PatientHash from '../interfaces/PatientHash';

const testSpecimenType:SpecimenType = {
    system: 'test system',
    code: 'test code',
    display: 'test display',
    loading: undefined
}

const testSpecimen:Specimen = {
    id: '123456',
    type: testSpecimenType,
    collectedDateTime: '2/6/2020',
    patientID: '78910',
}

const emptyTestPatientHash:PatientHash = {}

const testPatientHash:PatientHash = {
    '123456': {
        birthDate: '06/16/1995',
        gender: 'male',
        loading: undefined
    }
}

it('displays specimen information', () => {
    const { getByText } = render(<SpecimenBox specimen={testSpecimen} testPatientHash={emptyTestPatientHash}/>)
    
    expect(getByText('test system')).toBeInTheDocument();
    expect(getByText('ID: 123456')).toBeInTheDocument();
    expect(getByText('test code')).toBeInTheDocument();
    expect(getByText('test display')).toBeInTheDocument();
  })

it('asks the user to click to load patient information', () => {
  const { getByText } = render(<SpecimenBox specimen={testSpecimen} testPatientHash={emptyTestPatientHash}/>)

  expect(getByText(/Click to load patient info.../i)).toBeInTheDocument();
})

it('shows patient information when patientHash has a patient value', () => {
    const { getByText } = render(<SpecimenBox specimen={testSpecimen} testPatientHash={testPatientHash}/>)
  
    expect(getByText('06/16/1995')).toBeInTheDocument();
    expect(getByText('male')).toBeInTheDocument();
  })