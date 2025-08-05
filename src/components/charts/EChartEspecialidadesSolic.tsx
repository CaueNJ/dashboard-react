import { useEffect, useRef } from "react";
import * as echarts from "echarts";

function EChartEspecialidadesSolic() {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = echarts.init(chartRef.current);

    const option = {
      title: {
        text: "Especialidades mais solicitadas (>30)",
      },
      tooltip: {
        trigger: "axis",
        axisPointer: { type: "shadow" },
      },
      xAxis: {
        type: "category",
        axisLabel: { interval: 0, rotate: 30 },
        data: [
          "GINECOLOGIA",
          "ENDOCRINOLOGIA",
          "OFTALMOLOGIA",
          "DERMATOLOGIA",
          "PSIQUIATRIA",
          "ORTOPEDIA E TRAUMATOLOGIA",
          "CARDIOLOGIA",
          "CLINICA MEDICA",
          "NEUROLOGIA",
          "PEDIATRIA PUERICULTURA",
          "OTORRINOLARINGOLOGIA",
          "UROLOGIA",
          "ACUPUNTURA",
          "OBSTETRÍCIA",
          "PEDIATRIA ELETIVA",
          "CIRURGIA PLASTICA",
          "PNEUMOLOGIA",
          "CIRURGIA GERAL",
        ],
      },
      yAxis: {},
      series: [
        {
          name: "Quantidade solicitada:",
          type: "bar",
          data: [
            481, 239, 236, 233, 189, 178, 169, 168, 122, 105, 100, 88, 76, 75,
            59, 59, 53, 31,
          ],
          label: {
            show: true,
            position: "top",
            valueAnimation: true,
          },
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

export default EChartEspecialidadesSolic;
