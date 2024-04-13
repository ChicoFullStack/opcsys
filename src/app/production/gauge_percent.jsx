import ReactECharts from 'echarts-for-react';


const Content = () => {
    const option = {
      series: [
        {
          type: 'gauge',
          center: ['50%', '60%'],
          startAngle: 180,
          endAngle: -0,
          min: 0,
          max: 100,
          splitNumber: 10,
          itemStyle: {
            color: '#FFAB91'
          },
          progress: {
            show: true,
            width: 10
          },
          pointer: {
            show: false
          },
          axisLine: {
            lineStyle: {
              width: 40,
              color: '#999'
            }
          },
          axisTick: {
            distance: -45,
            splitNumber: 5,
            lineStyle: {
              width: 2,
              color: '#999'
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
            borderRadius: 20,
            offsetCenter: [0, '-15%'],
            fontSize: 50,
            fontWeight: 'bolder',
            formatter: '{value} %',
            color: 'inherit'
          },
          data: [
            {
              value: 80
            }
          ]
        },
        {
          type: 'gauge',
          center: ['50%', '60%'],
          startAngle: 180,
          endAngle: -0,
          min: 0,
          max: 100,
          itemStyle: {
            color: '#FD7347'
          },
          progress: {
            show: true,
            width: 8
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
              value: 80
            }
          ]
        }
      ]
    };
  

    return (
        <div className="contentContainer">
            <ReactECharts option={option} />
        </div>
    )
}
export default Content;


