import React from 'react';
import { MegaMenu } from 'primereact/megamenu';
import './MegaMenu.css';

export default function ERPMenu() {
    const items = [
        {
            label: 'Gestión Financiera',
            icon: 'pi pi-wallet',
            items: [
                [
                    {
                        label: 'Contabilidad',
                        items: [{ label: 'Libros Contables' }, { label: 'Balance General' }, { label: 'Estado de Resultados' }]
                    }
                ],
                [
                    {
                        label: 'Facturación',
                        items: [{ label: 'Generación de Facturas' }, { label: 'Gestión de Pagos' }, { label: 'Historial de Facturas' }]
                    }
                ],
                [
                    {
                        label: 'Reportes Financieros',
                        items: [{ label: 'Análisis de Costos' }, { label: 'Informes de Rentabilidad' }]
                    }
                ]
            ]
        },
        {
            label: 'Gestión de Inventarios',
            icon: 'pi pi-cog',
            items: [
                [
                    {
                        label: 'Productos',
                        items: [{ label: 'Catálogo de Productos' }, { label: 'Gestión de Stock' }, { label: 'Niveles de Inventario' }]
                    }
                ],
                [
                    {
                        label: 'Órdenes de Compra',
                        items: [{ label: 'Crear Orden' }, { label: 'Historial de Órdenes' }]
                    }
                ],
                [
                    {
                        label: 'Proveedores',
                        items: [{ label: 'Lista de Proveedores' }, { label: 'Gestión de Contactos' }]
                    }
                ]
            ]
        },
        {
            label: 'Recursos Humanos',
            icon: 'pi pi-users',
            items: [
                [
                    {
                        label: 'Empleados',
                        items: [{ label: 'Base de Datos de Empleados' }, { label: 'Contratación' }, { label: 'Evaluaciones' }]
                    }
                ],
                [
                    {
                        label: 'Asistencia',
                        items: [{ label: 'Registro de Asistencia' }, { label: 'Control de Horas Extras' }]
                    }
                ],
                [
                    {
                        label: 'Nómina',
                        items: [{ label: 'Generación de Nómina' }, { label: 'Cálculos de Sueldos' }, { label: 'Pagos y Beneficios' }]
                    }
                ]
            ]
        },
        {
            label: 'Clientes y Ventas',
            icon: 'pi pi-briefcase',
            items: [
                [
                    {
                        label: 'Gestión de Clientes',
                        items: [{ label: 'Base de Datos de Clientes' }, { label: 'Historial de Compras' }]
                    }
                ],
                [
                    {
                        label: 'Ventas',
                        items: [{ label: 'Órdenes de Venta' }, { label: 'Descuentos y Promociones' }]
                    }
                ],
                [
                    {
                        label: 'Reportes de Ventas',
                        items: [{ label: 'Ventas por Producto' }, { label: 'Ventas por Cliente' }]
                    }
                ]
            ]
        }
    ];

    return (
        <div className="card megamenu-container">
            <MegaMenu model={items} breakpoint="960px" className="custom-megamenu" />
        </div>
    );
}
