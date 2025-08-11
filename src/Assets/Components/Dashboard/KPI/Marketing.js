import React from 'react';
import { Card } from 'primereact/card';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

export default function CampañasMarketing() {
    const data = [
        { name: 'Campaña Redes Sociales', value: 45 },
        { name: 'Campaña Email', value: 25 },
        { name: 'Campaña SEO', value: 15 },
        { name: 'Campaña PPC', value: 10 },
        { name: 'Campaña Afiliados', value: 5 }
    ];

    const COLORS = ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50', '#FF9800'];

    const totalCampañas = data.reduce((acc, item) => acc + item.value, 0);

    const header = (
        <Card style={{ borderRadius: '0%', width: '0px', height: '0px' }} />
    );

    return (
        <div className="card flex justify-content-center">
            <Card
                title="Campañas de Marketing"
                subTitle="Rendimiento de campañas"
                header={header}
                className="md:w-25rem shadow-5"
                style={{ backgroundColor: '#F3E5F5', borderRadius: '20px', fontFamily: 'Arial, sans-serif', color: '#4A148C' }}
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
                <p style={{ marginTop: '0.1px', textAlign: 'center', fontSize: '1.0rem', fontWeight: 'bold' }}>
                    Total de Campañas: {totalCampañas}
                </p>
            </Card>
        </div>
    );
}
