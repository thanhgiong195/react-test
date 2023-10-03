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

const data = {
    labels: ['6月', '7月', '8月', '9月', '10月', '11月', '12月', '1月', '2月', '3月', '4月', '5月'],
    datasets: [
        {
            data: [65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56],
            borderColor: '#FFCC21',
            backgroundColor: '#FFCC21',
            size: 10,
        },
        {
            data: [28, 48, 40, 67, 69, 27, 16, 50, 81, 56, 55, 40],
            borderColor: '#8FE9D0',
            backgroundColor: '#8FE9D0',
        },
    ],
};

const options = {
    responsive: true,
    plugins: {
        legend: {
            display: false,
            position: 'top',
        },
        title: {
            display: false,
        },
    },
};

const Chart = () => {
    return (
        <Line options={options} data={data} />
    )
}

export default Chart;
