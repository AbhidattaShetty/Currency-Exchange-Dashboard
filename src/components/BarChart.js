import { Bar } from 'react-chartjs-2'
import { Card } from 'react-bootstrap'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import axios from 'axios';
import { useEffect, useState } from 'react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function BarChart() {

  const [currency, setCurrency] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const res = await axios.get("https://api.frankfurter.app/latest")
    const { rates } = res.data
    const ratesTemp = []
    for (const [symbol, rate] of Object.entries(rates)) {
      ratesTemp.push({ symbol, rate })
    }
    setCurrency(ratesTemp)
  }

  const data = {
    labels: currency.slice(0, 5).map((ele) => ele.symbol),
    datasets: [{
      label: '1 EUR =',
      data: currency.slice(0, 5).map((ele) => ele.rate),
      borderColor: ['rgba(255, 99, 132, 0.2)'],
      backgroundColor: ['#FFA500'],
      pointBackgroundColor: 'rgba(255,206,86,0.2)',
      pointBorderColor: 'rgba(255,206,86,0.2)'
    }]
  }
  const options = {
    plugins: {
      title: {
        display: true,
        text: 'Currency Exchange Rates'
      }
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Currency Name'
        }
      },

      y: {
        title: {
          display: true,
          text: 'Currency Rate'
        },
        min: 0,
        max: 6,
        ticks: {
          stepSize: 1
        }
      }
    }
  }
  return (
    <Card style={{ width: '50rem' }} className="shadow p-3 mb-5 bg-white rounded py-2">
      <Card.Body>
        <Bar data={data} options={options} />
      </Card.Body>
    </Card>
  );
}

export default BarChart