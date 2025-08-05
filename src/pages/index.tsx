import DataTable from "../components/table";

import EChartEspecialidadesSolic from "@/components/charts/EChartEspecialidadesSolic";
import EChartLocaisCancelados from "@/components/charts/EChartLocaisCancelados";
import EChartMedicosEspec from "@/components/charts/EChartMedicosEspec";
import EChartColunasMes from "@/components/charts/EChartColunasMes";
import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="w-[1200px] h-[400px]">
          <EChartColunasMes />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="w-[550px] h-[400px]">
            <EChartEspecialidadesSolic />
          </div>
          <div className="w-[550px] h-[400px]">
            <EChartLocaisCancelados />
          </div>
          <div className="w-[550px] h-[400px]">
            <EChartMedicosEspec />
          </div>
        </div>
      </section>
      <DataTable />
    </DefaultLayout>
  );
}
