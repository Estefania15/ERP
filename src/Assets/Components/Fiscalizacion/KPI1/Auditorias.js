import React from 'react';
import { Card } from 'primereact/card';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

export default function Clientes() {
    const data = [
        { name: 'Clientes Activos', value: 100 },
        { name: 'Campaña Marketing', value: 10 },
        { name: 'Clientes Potenciales', value: 10 },
        { name: 'Clientes Inactivos', value: 5 },
        { name: 'Clientes Ganados', value: 25 }
    ];

    const COLORS = ['#4A90E2', '#7FB3D5', '#154360', '#EAF2F8', '#5DADE2'];

    const totalClientes = data.reduce((acc, item) => acc + item.value, 0);

    const header = (
        <Card style={{ borderRadius: '0%', width: '0px', height: '0px' }} />
    );

    return (
        <div className="card flex justify-content-center">
            <Card
                title="Clientes"
                subTitle="Información"
                header={header}
                className="md:w-25rem shadow-5"
                style={{ backgroundColor: '#EAF2F8', borderRadius: '20px', fontFamily: 'Arial, sans-serif', color: '#154360' }}
            >
                <PieChart width={300} height={300}>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={100}
                        fill="#8884d8"
                        paddingAngle={5}
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    
                    <Tooltip />
                </PieChart>
                <p style={{ textAlign: 'center', fontSize: '1.5rem', fontWeight: 'bold' }}>
                    Total de Clientes: {totalClientes}
                </p>
            </Card>
        </div>
    );
}
