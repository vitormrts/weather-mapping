import { useCities } from '@src/hooks';
import { useEffect, useRef, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  BarElement,
  Title,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import * as S from './Chart.style';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Tooltip,
  Legend,
  Title,
);

const options = {
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Temperature in multiple cities',
    },
  },
};

const Chart = () => {
  const { cities } = useCities();
  const ref = useRef(null);
  const [data, setData] = useState({
    datasets: [],
  });

  useEffect(() => {
    const chart = ref.current;

    if (!chart) {
      return;
    }

    const names = [];
    const minTemperatures = [];
    const maxTemperatures = [];
    const temperatures = [];

    cities.forEach(({ name, weather }) => {
      names.push(name);
      minTemperatures.push(weather.min_temperature);
      maxTemperatures.push(weather.max_temperature);
      temperatures.push(weather.temperature);
    });

    const chartData = {
      labels: names,
      datasets: [
        {
          label: 'Min temperature',
          backgroundColor: 'rgba(99, 195, 255,0.2)',
          borderColor: 'rgba(99, 195, 255,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(99, 195, 255,0.4)',
          hoverBorderColor: 'rgba(99, 195, 255,1)',
          data: minTemperatures,
        },
        {
          label: 'Max temperature',
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: maxTemperatures,
        },
        {
          label: 'Temperature',
          backgroundColor: '#f87979',
          data: temperatures,
        },
      ],
    };

    setData(chartData);
  }, [cities]);

  return (
    <S.Wrapper>
      <Bar
        ref={ref}
        data={data}
        options={options}
      />
    </S.Wrapper>
  );
};

export default Chart;
