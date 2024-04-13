"use client"
import ReactECharts from 'echarts-for-react';

const Content = () => {
    const option = {
      series: [
        {
          type: 'gauge',
          center: ['50%', '50%'],
          startAngle: -360,
          endAngle: -0,
          min: 0,
          max: 100,
          splitNumber: 10,
          itemStyle: {
            color: '#FFFFFF'
          },
          progress: {
            show: false,
            width: 10
          },
          pointer: {
            show: false
          },
          axisLine: {
            lineStyle: {
              width: 0,
              color: '#'
            }
          },
          axisTick: {
            distance: -45,
            splitNumber: 5,
            lineStyle: {
              width: 2,
              color: '#'
            }
          },
          splitLine: {
            distance: -55,
            length: 15,
            lineStyle: {
              width: 3,
              color: '#999'
            }
          },
          axisLabel: {
            distance: -1,
            color: '#999',
            fontSize: 15
          },
          anchor: {
            show: false
          },
          title: {
            show: false
          },
          detail: {
            valueAnimation: true,
            width: '60%',
            lineHeight: 40,
            borderRadius: 30,
            offsetCenter: [0, '0%'],
            fontSize: 35,
            fontWeight: 'bolder',
            formatter: '{value} %',
            color: '#000000'
          },
          data: [
            {
              value: 89
            }
          ]
        },
        {
          type: 'gauge',
          center: ['50%', '50%'],
          startAngle: -360,
          endAngle: -0,
          min: 0,
          max: 100,
          itemStyle: {
            color: '#1A9A46'
          },
          progress: {
            show: true,
            width: 20
          },
          pointer: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: false
          },
          axisLabel: {
            show: false
          },
          detail: {
            show: false
          },
          data: [
            {
              value: 89
            }
          ]
        }
      ]
    };
   
    return <ReactECharts option={option} />
        
   
}
export default Content;


