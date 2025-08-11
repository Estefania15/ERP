import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { ProgressBar } from 'primereact/progressbar';

export default function Casos() {
    const caseData = {
        total: 50,
        resolved: 40,
        pending: 10,
        progress: (40 / 50) * 100
    };

    return (
        <div className="flex justify-content-center">
            <Card 
                title="Casos" 
                subTitle="Resumen de Casos" 
                className="md:w-30rem shadow-5" 
                style={{ backgroundColor: '#E3F2FD', borderRadius: '20px', fontFamily: 'Arial, sans-serif', color: '#0D47A1' }}
            >
                <div style={{ textAlign: 'center' }}>
                    <h3 style={{ fontSize: '2rem', margin: '0' }}>Total de Casos: {caseData.total}</h3>
                    <p style={{ fontSize: '1.2rem', margin: '0.5rem 0' }}>
                        Resueltos: {caseData.resolved} | Pendientes: {caseData.pending}
                    </p>
                    <ProgressBar value={caseData.progress} showValue style={{ height: '1.5rem', borderRadius: '10px' }} />
                    <div style={{ marginTop: '1rem' }}>
                        <Button label="Ver Detalles" icon="pi pi-search" className="p-button-info p-button-rounded" style={{ marginRight: '0.5rem' }} />
                        <Button label="Añadir Caso" icon="pi pi-plus" className="p-button-success p-button-rounded" />
                    </div>
                </div>
            </Card>
        </div>
    );
}
