import React from 'react'
import SpecimenType from '../../interfaces/SpecimenType';
import Patient from '../../interfaces/Patient';

interface SpecimenBoxTableProps {
    label: string,
    dataObj: SpecimenType | Patient
}

export default function SpecimenBoxTable({label, dataObj}:SpecimenBoxTableProps) {
    return (
        <div className="w-1/2 px-3">
            <p>{label}</p>
            {dataObj.loading 
            ?   <> 
                    <div className="h-4 bg-gray-300 rounded mb-4 w-1/2"></div>
                    <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                </>
            :   <table>
                    <tbody>
                        {Object.entries(dataObj).map(([key, value]) => 
                            <tr key={key}>
                                <td>{key}</td>
                                <td>{value || "N/A"}</td>
                            </tr>    
                        )}
                    </tbody>
                </table>}
        </div>
    )
}
