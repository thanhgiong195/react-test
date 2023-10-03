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
            data: [88, 85, 60, 68, 62, 58, 68, 65, 58, 55, 50, 56],
            borderColor: '#FFCC21',
            backgroundColor: '#FFCC21',
            size: 10,
        },
        {
            data: [88, 82, 66, 64, 57, 56, 53, 51, 49, 45, 35, 30],
            borderColor: '#8FE9D0',
            backgroundColor: '#8FE9D0',
        },
    ],
};

const options = {
    responsive: true,
    maintainAspectRatio: false,
    aspectRatio: 1,
    plugins: {
        legend: {
            display: false,
        },
        title: {
            display: false,
        },
    },
    scales: {
        y: {
            ticks: {
                display: false,
            }
        },
        x: {
            ticks: {
                color: "white",
                font: {
                    size: 12,
                },
                stepSize: 1,
                beginAtZero: true
            }
        }
    }
};

const Chart = ({ padding }) => {
    return (
        <Line options={{
            ...options, layout: {
                padding: padding || 0,
            }
        }} data={data} />
    )
}

export default Chart;
