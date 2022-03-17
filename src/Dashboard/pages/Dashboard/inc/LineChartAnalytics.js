import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
export const options = {
  responsive: true,
  bezierCurve: true,
  borderJoinStyle: 'round',
  borderWidth: 5,
  elements: {
    point: {
      radius: 0,
    },
  },

  plugins: {
    legend: {
      position: 'top',
      align: 'end',
      labels: {
        boxWidth: 10,
        boxHeight: 10,
      },
    },
    title: {
      display: false,
    },
  },
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

const labels = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [0, 100, 250, 500, 450, 350, 200, 500, 700, 650, 450, 900],
      borderColor: '#FFCA1F',
      backgroundColor: '#FFCA1F',
      lineTension: 1,
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => Math.floor(Math.random() * 1000)),
      borderColor: '#3C21F7',
      backgroundColor: '#3C21F7',
      lineTension: 1,
    },
  ],
};

const LineChartAnalytics = () => {
  return (
    <div>
      <Line options={options} data={data} />
    </div>
  );
};

export default LineChartAnalytics;
