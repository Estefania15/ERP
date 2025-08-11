import React from 'react';
import './CVmenu.css'; 

export default function CVmenu() {
    const cvItems = [
        {
            label: 'Información Personal',
            items: [
                { label: 'Nombre: Estefania Cruz' },
                { label: 'Título: Estudiante de Tecnología de la Información en los Negocios' },
                { label: 'Email: estefania.cruz@example.com' },
                { label: 'Teléfono: +58 412 345 6789' },
                { label: 'LinkedIn: linkedin.com/in/estefaniacruz' }
            ]
        },
        {
            label: 'Perfil Profesional',
            items: [
                { label: 'Estudiante de Tecnología de la Información con conocimientos sólidos en programación, administración y gestión de proyectos tecnológicos. Apasionada por la innovación y la búsqueda de soluciones eficientes para optimizar procesos empresariales mediante el uso de herramientas tecnológicas avanzadas. Gran capacidad de análisis, trabajo en equipo y aprendizaje continuo.' }
            ]
        },
        {
            label: 'Experiencia Laboral',
            items: [
                {
                    label: 'Asistente de Administración de Proyectos - Soluciones Empresariales C.A. (2023 - Presente)',
                    subItems: [
                        'Apoyo en la gestión de proyectos tecnológicos',
                        'Análisis de procesos administrativos',
                        'Coordinación con equipos técnicos y de negocio',
                        'Elaboración de reportes y documentación'
                    ]
                },
                {
                    label: 'Pasante en el Departamento de TI - Inversiones Globales (2022 - 2023)',
                    subItems: [
                        'Soporte en la implementación de sistemas de información',
                        'Desarrollo de scripts para automatización',
                        'Capacitación a usuarios finales',
                        'Resolución de incidencias técnicas'
                    ]
                }
            ]
        },
        {
            label: 'Educación',
            items: [
                { label: 'Licenciatura en Tecnología de la Información en los Negocios - Universidad Simón Bolívar (2022 - Presente)' }
            ]
        },
        {
            label: 'Habilidades',
            items: [
                'Programación en Python y JavaScript',
                'Gestión de Bases de Datos SQL',
                'Administración de Proyectos',
                'Análisis de Datos',
                'Resolución de Problemas',
                'Trabajo en Equipo'
            ]
        }
    ];

    return (
        <div className="cv-menu-container">
            {cvItems.map((section, index) => (
                <div key={index} className="cv-section">
                    <h3>{section.label}</h3>
                    <ul>
                        {section.items.map((item, idx) => (
                            <li key={idx}>
                                {item.label || item}
                                {item.subItems && (
                                    <ul>
                                        {item.subItems.map((subItem, subIdx) => (
                                            <li key={subIdx}>{subItem}</li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}
