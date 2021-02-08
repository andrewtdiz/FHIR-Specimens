import React from 'react'

export default function SpecimenBoxTable({label, dataObj}:any) {

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
                        {Object.keys(dataObj).map(key => 
                            <tr key={key}>
                                <td>{key}</td>
                                <td>{dataObj[key] || "N/A"}</td>
                            </tr>    
                        )}
                    </tbody>
                </table>}
        </div>
    )
}
