import { useEffect, useRef } from "react";
import * as echarts from "echarts";

function EChartLocaisCancelados() {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = echarts.init(chartRef.current);

    const option = {
      title: {
        top: "3%",
        text: "Consultas canceladas por local",
      },
      tooltip: {
        trigger: "item",
      },
      legend: {
        top: "10%",
        left: "center",
      },
      series: [
        {
          name: "Agendas canceladas:",
          type: "pie",
          radius: ["40%", "70%"],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: "#fff",
            borderWidth: 2,
          },
          label: {
            show: false,
            position: "center",
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 40,
              fontWeight: "bold",
            },
          },
          labelLine: {
            show: false,
          },
          data: [
            { value: 58, name: "Içara" },
            { value: 2418, name: "Criciúma" },
            { value: 85, name: "Araranguá" },
            { value: 11, name: "Urussanga" },
          ],
        },
      ],
    };

    chart.setOption(option);

    return () => {
      chart.dispose();
    };
  }, []);

  return <div ref={chartRef} style={{ width: "100%", height: "400px" }} />;
}

export default EChartLocaisCancelados;
