import React from 'react';
import Casos from './KPI/Casos';
import Clientes from './KPI/Cliente';
import Marketing from './KPI/Marketing';
import Logistica from './KPI/Logistica';

export default function Dashboard() {
    return (
        <>
        <h3>Dashboard</h3>
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
                    <Casos/>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
                    <Clientes/>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
                    <Marketing/>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
                    <Logistica/>
                </div>
            </div>
        </div>
        </>
    );
}
