import React, { useState } from 'react';
import './RecursosHumanos.css'; // Importamos el archivo CSS

const empleados = [
    { id: 1, nombre: 'Juan Pérez', puesto: 'Desarrollador', departamento: 'Tecnología', salario: '$3500' },
    { id: 2, nombre: 'Ana García', puesto: 'Gerente', departamento: 'Ventas', salario: '$5000' },
    { id: 3, nombre: 'Carlos Ruiz', puesto: 'Diseñador', departamento: 'Marketing', salario: '$3000' },
    { id: 4, nombre: 'Laura López', puesto: 'Jefe de Recursos Humanos', departamento: 'Recursos Humanos', salario: '$4500' },
];

function App() {
    const [selectedEmployee, setSelectedEmployee] = useState(null);

    const handleSelectEmployee = (employee) => {
        setSelectedEmployee(employee);
    };

    return (
        <div className="erp-container">
            <h1>Gestión de Recursos Humanos</h1>
            <div className="employee-list">
                <h2>Lista de Empleados</h2>
                <ul>
                    {empleados.map((empleado) => (
                        <li key={empleado.id} onClick={() => handleSelectEmployee(empleado)}>
                            {empleado.nombre} - {empleado.puesto}
                        </li>
                    ))}
                </ul>
            </div>

            {selectedEmployee && (
                <div className="employee-detail">
                    <h2>Detalles del Empleado</h2>
                    <p><strong>Nombre:</strong> {selectedEmployee.nombre}</p>
                    <p><strong>Puesto:</strong> {selectedEmployee.puesto}</p>
                    <p><strong>Departamento:</strong> {selectedEmployee.departamento}</p>
                    <p><strong>Salario:</strong> {selectedEmployee.salario}</p>
                </div>
            )}
        </div>
    );
}

export default App;
