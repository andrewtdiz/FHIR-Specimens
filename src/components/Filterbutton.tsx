import React, {useState} from 'react'

export default function Filterbutton() {
    const [isOpen, setIsOpen] = useState<boolean>(true);

    const toggleOpen = () => setIsOpen(isOpen => !isOpen);

    return (
        <div className="relative">
            <button onClick={toggleOpen} className="button-outline ml-menu-item">Filter options</button>
            <div className={`modal-dropdown top-100 right-0 transform ${isOpen ? "opacity-0 -translate-y-4 pointer-events-none" : "opacity-100 translate-y-0 pointer-events-auto"}`}>
                <p className="font-light mb-4 text-gray-600 text-xs">FILTER BY</p>
                <label htmlFor="hasSpecimen" className="flex items-center">
                    <input name="hasSpecimen" type="checkbox" checked={false}/>
                    <h2 className="ml-6 text-base">Specimen Type</h2>
                </label>
                <label htmlFor="hasDateTime" className="flex items-center mt-2">
                    <input name="hasDateTime" type="checkbox" checked={false}/>
                    <h2 className="ml-6 text-base">DateTime</h2>
                </label>
            </div>
        </div>
    )
}
