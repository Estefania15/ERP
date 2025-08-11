import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Toolbar } from 'primereact/toolbar';
import { Avatar } from 'primereact/avatar';
import Sidebar1 from '../Sidebar/Sidebar1'; // Asegúrate que Sidebar1 está correcto

export default function Topbar() {
    const { user } = useAuth0();
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const startContent = (
        <div className="flex align-items-center gap-3">
            <Sidebar1 />
            <span className="text-xl font-bold text-white ml-3">Mi Aplicación</span>
        </div>
    );

    const centerContent = (
        <div></div> // Vacío para mantenerlo limpio
    );

    const endContent = (
        <div className="flex align-items-center gap-3">
            {user && (
                <div className="flex align-items-center gap-2 cursor-pointer" onClick={toggleDropdown}>
                    <Avatar 
                        image={user.picture} 
                        shape="circle" 
                        size="large" 
                        className="border-2 border-white" 
                    />
                    <span className="text-white font-medium hidden md:inline">{user.name}</span>
                </div>
            )}
            {dropdownOpen && (
                <div className="dropdown-content p-2 bg-white shadow-2 border-round">
                    <p className="m-0 text-black font-medium">{user.name}</p>
                </div>
            )}
        </div>
    );

    return (
        <div className="surface-900" style={{ height: '70px', display: 'flex', alignItems: 'center', padding: '0 2rem' }}>
            <Toolbar 
                start={startContent}
                center={centerContent}
                end={endContent}
                className="w-full border-none surface-900"
            />
        </div>
    );
}
