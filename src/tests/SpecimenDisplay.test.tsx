import React from 'react'
import { render } from '@testing-library/react'
import SpecimenDisplay from '../components/Specimen/SpecimenDisplay'
import Specimen from '../interfaces/Specimen';
import SpecimenType from '../interfaces/SpecimenType';

const testSpecimenType:SpecimenType = {
    system: 'test system',
    code: 'test code',
    display: 'test display',
    loading: undefined
}

const testSpecimenData:Array<Specimen> = [
    {
        id: '1',
        type: testSpecimenType,
        collectedDateTime: '2/6/2020',
        patientID: '78910',
    },
    {
        id: '2',
        type: testSpecimenType,
        collectedDateTime: '2/7/2020',
        patientID: '78910',
    },
    {
        id: '3',
        type: testSpecimenType,
        collectedDateTime: '2/8/2020',
        patientID: '78910',
    }
]

it('displays the specimen ID', () => {
    const { getByText } = render(<SpecimenDisplay testSpecimenData={testSpecimenData}/>)
    
    expect(getByText('ID: 1')).toBeInTheDocument();
    expect(getByText('ID: 2')).toBeInTheDocument();
    expect(getByText('ID: 3')).toBeInTheDocument();
  })

it('displays the specimen collectionDateTime', () => {
    const { getByText } = render(<SpecimenDisplay testSpecimenData={testSpecimenData}/>)
    
    expect(getByText('2/6/2020')).toBeInTheDocument();
    expect(getByText('2/7/2020')).toBeInTheDocument();
    expect(getByText('2/8/2020')).toBeInTheDocument();
  })
