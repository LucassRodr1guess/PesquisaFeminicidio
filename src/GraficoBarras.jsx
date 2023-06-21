import React from 'react';
import { Bar } from 'react-chartjs-2';


const GraficoBarras = () => {
  const data = {
    labels: ['Brancas', 'Pardas', 'Pretas'],
    datasets: [
      {
        label: 'Feminicídio',
        data: [60, 371, 71],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <h3>Estatísticas de Feminicídio por Cor da Pele</h3>
      <Bar data={data} options={options} />
    </div>
  );
};

export default GraficoBarras;
