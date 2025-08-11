import React from 'react';
import { Card } from 'primereact/card';
import { ProgressBar } from 'primereact/progressbar';

export default function LogisticaERP() {
    const data = [
        { name: 'Logística Almacenaje', value: 65 },
    ];

    const totalLogistica = data.reduce((acc, item) => acc + item.value, 0);

    return (
        <div className="card flex justify-content-center">
            <Card
                title="Gestión de Logística ERP"
                subTitle="Rendimiento de procesos logísticos"
                className="md:w-25rem shadow-5"
                style={{ backgroundColor: '#F3E5F5', borderRadius: '20px', fontFamily: 'Arial, sans-serif', color: '#4A148C' }}
            >
                <div className="grid grid-nogutter">
                    {data.map((item, index) => (
                        <div key={index} className="col-12 md:col-4" style={{ marginBottom: '20px' }}>
                            <Card
                                title={item.name}
                                subTitle={`${item.value}%`}
                                className="p-shadow-5"
                                style={{
                                    backgroundColor: '#fff',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    padding: '15px',
                                }}
                            >
                                <ProgressBar
                                    value={item.value}
                                    showValue={false}
                                    style={{ width: '100%', height: '20px', borderRadius: '10px' }}
                                    className="p-mb-3"
                                />
                                <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{item.value}%</p>
                            </Card>
                        </div>
                    ))}
                </div>
                <div style={{ marginTop: '25px', textAlign: 'center', fontSize: '1.5rem', fontWeight: 'bold' }}>
                    Total Logístico: {totalLogistica}%
                </div>
            </Card>
        </div>
    );
}
