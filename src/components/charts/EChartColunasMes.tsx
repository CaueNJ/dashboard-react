import { useEffect, useRef } from "react";
import * as echarts from "echarts";

function EChartColunasMes() {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = echarts.init(chartRef.current);

    const option = {
      tooltip: {
        trigger: "axis",
      },
      legend: {
        top: "5%",
        data: ["Consultas Solicitadas", "Consultas Canceladas"],
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      toolbox: {
        feature: {
          saveAsImage: {},
        },
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: ["01/25", "02/25", "03/25", "04/25", "05/25", "06/25", "07/25"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          name: "Consultas Solicitadas",
          type: "line",
          stack: "Total",
          data: [120, 132, 101, 134, 90, 230, 210],
        },
        {
          name: "Consultas Canceladas",
          type: "line",
          stack: "Total",
          data: [220, 182, 191, 234, 290, 330, 310],
        },
      ],
    };

    chart.setOption(option);

    return () => {
      chart.dispose();
    };
  }, []);

  return <div ref={chartRef} style={{ width: "100%", height: "100%" }} />;
}

export default EChartColunasMes;
