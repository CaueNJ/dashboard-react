import { useEffect, useRef } from "react";
import * as echarts from "echarts";

function EChartMedicosEspec() {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = echarts.init(chartRef.current);

    interface DataItem {
      value: number;
      groupId: string;
    }

    const option = {
      title: {
        text: "Consultas finalizadas por médico",
      },
      tooltip: {
        trigger: "axis",
        axisPointer: { type: "shadow" },
      },
      xAxis: {
        show: false,
        data: [
          "LEANDRO AVANY NUNES",
          "ADAYR CABREIRA FILHO",
          "JULIANA CRIPPA SILVESTRE",
        ],
        axisLabel: { interval: 0, rotate: 30 },
      },
      yAxis: {},
      dataGroupId: "",
      animationDurationUpdate: 500,
      series: {
        name: "Consultas finalizadas:",
        type: "bar",
        id: "sales",
        label: {
          show: true,
          position: "top",
          valueAnimation: true,
        },
        data: [
          {
            value: 5,
            groupId: "LEANDRO AVANY NUNES",
          },
          {
            value: 4,
            groupId: "ADAYR CABREIRA FILHO",
          },
          {
            value: 8,
            groupId: "JULIANA CRIPPA SILVESTRE",
          },
        ] as DataItem[],
        universalTransition: {
          enabled: true,
          divideShape: "clone",
        },
      },
    };

    const drilldownData = [
      {
        dataGroupId: "LEANDRO AVANY NUNES",
        data: [
          ["CIRURGIA DO APARELHO DIGESTIVO", 3],
          ["CIRURGIA GERAL", 2],
        ],
      },
      {
        dataGroupId: "ADAYR CABREIRA FILHO",
        data: [["ORTOPEDIA E TRAUMATOLOGIA", 4]],
      },
      {
        dataGroupId: "JULIANA CRIPPA SILVESTRE",
        data: [
          ["CLINICA MEDICA", 4],
          ["GASTROENTEROLOGIA", 2],
          ["OTORRINOLARINGOLOGIA", 2],
        ],
      },
    ];

    chart.on("click", function (event) {
      if (event.data) {
        var subData = drilldownData.find(function (data) {
          return data.dataGroupId === (event.data as DataItem).groupId;
        });

        if (!subData) {
          return;
        }
        chart.setOption<echarts.EChartsOption>({
          xAxis: {
            data: subData.data.map(function (item) {
              return item[0];
            }),
          },
          series: {
            type: "bar",
            id: "sales",
            dataGroupId: subData.dataGroupId,
            data: subData.data.map(function (item) {
              return item[1];
            }),
            universalTransition: {
              enabled: true,
              divideShape: "clone",
            },
          },
          graphic: [
            {
              type: "text",
              left: 50,
              top: 20,
              style: {
                text: "Voltar",
                fontSize: 18,
              },
              onclick: function () {
                chart.setOption<echarts.EChartsOption>(option);
              },
            },
          ],
        });
      }
    });

    chart.setOption(option);

    return () => {
      chart.dispose();
    };
  }, []);

  return <div ref={chartRef} style={{ width: "100%", height: "100%" }} />;
}

export default EChartMedicosEspec;
