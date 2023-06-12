import React, { FC } from 'react';
import styles from './JourneyItemChartTrends.module.scss';
import stylesExtend from './../JourneyItemChart/JourneyItemChart.module.scss';
import 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import Select from '../../ui/Select/Select';

interface JourneyItemChartTrendsProps { }

const JourneyItemChartTrends: FC<JourneyItemChartTrendsProps> = () => {
  const lineChartData = {
    labels: [24567, 24568, 24569, 24570, 24571, 24572],
    datasets: [
      {
        data: [1000, 2300, 3312, 2135, 2350, 2790],
        backgroundColor: '#3081DF',
        borderColor: '#3081DF',
      },
      {
        data: [1404, 3530, 5000, 4501, 4120, 4992],
        backgroundColor: '#FB6B03',
        borderColor: '#FB6B03',
      },
      {
        data: [700, 1245, 900, 500, 680, 1200],
        backgroundColor: '#35BB73',
        borderColor: '#35BB73',
      }
    ]
  };

  const options = {
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        enabled: false
      }
    },
  }

  return (
    <div className={`${stylesExtend.JourneyItemChart} ${styles.JourneyItemChartTrends}`}>
      <div className={styles.JourneyItemChart}>
        <div className={`${stylesExtend.JourneyItemChart__top} ${styles.JourneyItemChartTrends__top}`}>
          <span>Достижение цели</span>
          <Select
          defaultValue="Ежедневно"
          ></Select>
        </div>
        <div className={styles.JourneyItemChart__center}>
          <Line
            data={lineChartData}
            options={options}
          ></Line>
        </div>
        <div className={`${stylesExtend.JourneyItemChart__bottom} ${styles.JourneyItemChartTrends__bottom}`}>
          <div className={`${stylesExtend.JourneyItemChart__item} ${styles.JourneyItemChartTrends__item}`}>
            <svg width="7" height="7" viewBox="0 0 7 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect y="0.5" width="7" height="7" rx="3.5" fill="#3081DF" />
            </svg>
            <span className={`${stylesExtend.JourneyItemChart__data} ${styles.JourneyItemChartTrends__data}`}>Наименование</span>
          </div>
          <div className={`${stylesExtend.JourneyItemChart__item} ${styles.JourneyItemChartTrends__item}`}>
            <svg width="7" height="7" viewBox="0 0 7 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect y="0.5" width="7" height="7" rx="3.5" fill="#FB6B03" />
            </svg>
            <span className={`${stylesExtend.JourneyItemChart__item} ${styles.JourneyItemChartTrends__data}`}>Наименование</span>
          </div>
          <div className={`${stylesExtend.JourneyItemChart__item} ${styles.JourneyItemChartTrends__item}`}>
            <svg width="7" height="7" viewBox="0 0 7 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect y="0.5" width="7" height="7" rx="3.5" fill="#35BB73" />
            </svg>
            <span className={`${stylesExtend.JourneyItemChart__data} ${styles.JourneyItemChartTrends__data}`}>Наименование</span>
          </div>
        </div>
      </div>
    </div >
  );
};

export default JourneyItemChartTrends;
