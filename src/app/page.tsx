import Image from "next/image";
import { FaBuilding, FaTools, FaUsers, FaEdit, FaTrash } from "react-icons/fa";
import { GrNotes } from "react-icons/gr";
import { IoMdCheckboxOutline } from "react-icons/io";
import { MdDashboard, MdForklift } from "react-icons/md";

export default function Home() {
  // Dados mockados para a tabela
  const data = Array.from({ length: 20 }, (_, id) => ({
    id: id + 1,
    ambiente: `Ambiente ${id + 1}`,
    equipamento: `Equipamento ${id + 1}`,
    osAberta: `OS${id + 1}`,
    osConcluida: `OS${id + 1} Concluída`,
  }));

  return (
    <div className="h-screen flex flex-col bg-gradient-to-b from-green-200 via-green-300 to-green-500">
      <div className="flex flex-1">
        <aside className="w-64 p-6 bg-green-800 text-white fixed top-0 bottom-0 z-20">
          <Image src={"/image/logo1.png"} className="w-full" alt="Logo" width={240} height={240} />

          <nav className="space-y-4 flex flex-col mt-8">
            <a href="#" className="flex items-center gap-4 hover:text-green-300">
              <MdDashboard />
              Dashboard
            </a>
            <a href="#" className="flex items-center gap-4 hover:text-green-300">
              <FaBuilding />
              Ambientes
            </a>
            <a href="#" className="flex items-center gap-4 hover:text-green-300">
              <MdForklift />
              Equipamentos
            </a>
            <a href="#" className="flex items-center gap-4 hover:text-green-300">
              <FaTools />
              Manutenções
            </a>
            <a href="#" className="flex items-center gap-4 hover:text-green-300">
              <FaUsers />
              Usuários
            </a>
          </nav>
        </aside>

        <main className="flex-1 flex flex-col ml-64">
          <header className="w-full bg-green-800 p-6 text-center text-white fixed top-0 left-64 right-0 z-10">
            <h1 className="text-4xl font-bold uppercase">Sistema de Gestão de Manutenção</h1>
          </header>

          <div className="flex-1 flex flex-col pt-24">
            <div className="fixed top-24 left-64 right-0 grid grid-cols-4 gap-4 px-6 z-10">
              <div className="bg-green-700 p-6 flex gap-2 rounded-xl shadow-md">
                <div className="flex-1 flex flex-col">
                  <strong className="text-3xl font-bold text-white">200</strong>
                  <span className="text-sm text-green-200">Ambientes</span>
                </div>
                <FaBuilding size={48} className="text-white" />
              </div>

              <div className="bg-green-700 p-6 flex gap-2 rounded-xl shadow-md">
                <div className="flex-1 flex flex-col">
                  <strong className="text-3xl font-bold text-white">200</strong>
                  <span className="text-sm text-green-200">Equipamentos</span>
                </div>
                <MdForklift size={48} className="text-white" />
              </div>

              <div className="bg-green-700 p-6 flex gap-2 rounded-xl shadow-md">
                <div className="flex-1 flex flex-col">
                  <strong className="text-3xl font-bold text-white">200</strong>
                  <span className="text-sm text-green-200">O.S. Abertas</span>
                </div>
                <GrNotes size={48} className="text-white" />
              </div>

              <div className="bg-green-700 p-6 flex gap-2 rounded-xl shadow-md">
                <div className="flex-1 flex flex-col">
                  <strong className="text-3xl font-bold text-white">200</strong>
                  <span className="text-sm text-green-200">O.S. Concluídas</span>
                </div>
                <IoMdCheckboxOutline size={48} className="text-white" />
              </div>
            </div>

            <div className="mt-48 px-6">
              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <table className="min-w-full leading-normal">
                  <thead>
                    <tr>
                      <th className="px-5 py-3 border-b-2 border-green-200 bg-green-200 text-left text-xs font-semibold text-green-800 uppercase tracking-wider">
                        ID
                      </th>
                      <th className="px-5 py-3 border-b-2 border-green-200 bg-green-200 text-left text-xs font-semibold text-green-800 uppercase tracking-wider">
                        Ambiente
                      </th>
                      <th className="px-5 py-3 border-b-2 border-green-200 bg-green-200 text-left text-xs font-semibold text-green-800 uppercase tracking-wider">
                        Equipamento
                      </th>
                      <th className="px-5 py-3 border-b-2 border-green-200 bg-green-200 text-left text-xs font-semibold text-green-800 uppercase tracking-wider">
                        OS Aberta
                      </th>
                      <th className="px-5 py-3 border-b-2 border-green-200 bg-green-200 text-left text-xs font-semibold text-green-800 uppercase tracking-wider">
                        OS Concluída
                      </th>
                      <th className="px-5 py-3 border-b-2 border-green-200 bg-green-200 text-left text-xs font-semibold text-green-800 uppercase tracking-wider">
                        Ações
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item) => (
                      <tr key={item.id} className="hover:bg-green-100">
                        <td className="px-5 py-5 border-b border-green-200 bg-white text-sm text-green-800">
                          {item.id}
                        </td>
                        <td className="px-5 py-5 border-b border-green-200 bg-white text-sm text-green-800">
                          {item.ambiente}
                        </td>
                        <td className="px-5 py-5 border-b border-green-200 bg-white text-sm text-green-800">
                          {item.equipamento}
                        </td>
                        <td className="px-5 py-5 border-b border-green-200 bg-white text-sm text-green-800">
                          {item.osAberta}
                        </td>
                        <td className="px-5 py-5 border-b border-green-200 bg-white text-sm text-green-800">
                          {item.osConcluida}
                        </td>
                        <td className="px-5 py-5 border-b border-green-200 bg-white text-sm text-green-800">
                          <div className="flex gap-2">
                            <button className="text-green-500 hover:text-green-700">
                              <FaEdit />
                            </button>
                            <button className="text-red-500 hover:text-red-700">
                              <FaTrash />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
      <footer className="p-6 bg-green-800 text-center text-white text-sm fixed bottom-0 w-full z-20">
        Todos os direitos reservados &copy; 2024
      </footer>
    </div>
  );
}
