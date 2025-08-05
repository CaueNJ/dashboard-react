import { Link } from "@heroui/link";

import { Navbar } from "@/components/navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <Navbar />
      <main className="container mx-auto px-6 flex-grow pt-16">{children}</main>
      <footer className="w-full flex flex-col items-center justify-center py-3 bg-[#6c757d] gap-1">
        <Link
          isExternal
          className="flex items-center gap-1 text-current"
          href="https://www.unimedcriciuma.com.br/"
          title="Unimed Criciúma"
        >
          <span className="text-black-100">Desenvolvido por</span>
          <p className="text-green-500 font-bold">Unimed Criciúma</p>
        </Link>
        <Link
          isExternal
          className="flex items-center gap-1 text-current"
          href="mailto:consultaja@criciuma.unimedsc.com.br"
          title="Unimed Criciúma"
        >
          <p className="text-green-500 font-bold">
            consultaja@criciuma.unimedsc.com.br
          </p>
        </Link>
      </footer>
    </div>
  );
}
