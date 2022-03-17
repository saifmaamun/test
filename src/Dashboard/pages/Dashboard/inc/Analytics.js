import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
    },
  },
};

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
//   create a random number between 0 and 100

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => Math.floor(Math.random() * 1000)),
      backgroundColor: '#3C21F7',
      borderRadius: 10,
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => Math.floor(Math.random() * 1000)),
      backgroundColor: '#FFBB00',
      borderRadius: 10,
    },
  ],
};

const Analytics = () => {
  return (
    <div>
      <Bar options={options} data={data} />
    </div>
  );
};

export default Analytics;
