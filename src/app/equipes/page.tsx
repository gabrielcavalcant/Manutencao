"use client";
import { Aside } from "../components/aside";
import { Footer } from "../components/footer";
import { FaEdit, FaTrash } from "react-icons/fa";
import Table from "../components/table";
import { CustomDialog } from "../components/dialog";

export default function equipesPage() {
  const columns = [
    { header: "Equipe", accessor: "equipe" },
    { header: "Técnicos", accessor: "tecnicos" },
    { header: "Quantidade", accessor: "quantidade" },
    { header: "Data criação", accessor: "data_criacao" },
    {
      header: "Manutenções realizadas",
      accessor: "num_manutencoes_realizadas",
    },
    { header: "Manutenções pendentes", accessor: "num_manutencoes_pendentes" },
  ];

  const data = [
    {
      equipe: "Equipe A - Manutenção Pred",
      tecnicos: ["Abel Ferreira, ", "João Martins, ", "Vitor Castanheira"],
      quantidade: 3,
      data_criacao: "10/02/2024",
      num_manutencoes_realizadas: 8,
      num_manutencoes_pendentes: 1,
      editar: <FaEdit />,
      deletar: <FaTrash />,
    },
    {
      equipe: "Equipe B - Manutenção Corretiva",
      tecnicos: ["Carlos Pracidelli, ", "Tiago Costa, ", "Bruno Pivetti"],
      quantidade: 3,
      data_criacao: "15/03/2024",
      num_manutencoes_realizadas: 6,
      num_manutencoes_pendentes: 3,
      editar: <FaEdit />,
      deletar: <FaTrash />,
    },
    {
      equipe: "Equipe C - Manutenção Emergencial",
      tecnicos: ["João Martins, ", "Rogério Godoy, ", "Tiago Costa"],
      quantidade: 3,
      data_criacao: "20/04/2024",
      num_manutencoes_realizadas: 4,
      num_manutencoes_pendentes: 2,
      editar: <FaEdit />,
      deletar: <FaTrash />,
    },
  ];

  return (
    <div className="h-screen flex flex-col">
      <div className="flex-1 flex">
        <Aside />
        <main className="flex-1 flex flex-col p-6 bg-background">
          <header className="text-left p-4 rounded-md mb-6 flex justify-between">
            <h1 className="text-4xl font-bold uppercase text-foreground">
              Equipes
            </h1>
          </header>

          <div className="flex-1">
            <div className="container mx-auto p-4 bg-background rounded-lg">
              <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold text-foreground">
                  Lista de Equipes cadastradas
                </h1>
                <CustomDialog
                  triggerLabel="Criar Equipe"
                  title="Criar Equipe"
                  TypeButton="Criar"
                  description="Insira todos os campos corretamente!"
                  fields={[
                    { id: "equipe", label: "Equipe", type: "text" },
                    { id: "tecnicos", label: "Técnicos", type: "text" },
                    { id: "quantidade", label: "Quantidade", type: "number" },
                    { id: "data_criacao", label: "Data criação", type: "Date" },
                  ]}
                />
              </div>
              <div className="max-h-96 overflow-y-auto">
                <Table
                  columns={columns}
                  data={data}
                  actions={(item) => (
                    <div className="flex space-x-2">
                      <CustomDialog
                        triggerLabel={<FaEdit />}
                        title="Editar Equipe"
                        TypeButton="Editar"
                        description="Insira todos os campos corretamente!"
                        fields={[
                          { id: "equipe", label: "Equipe", type: "text" },
                          { id: "tecnicos", label: "Técnicos", type: "text" },
                          { id: "quantidade", label: "Quantidade", type: "number" },
                          { id: "data_criacao", label: "Data criação", type: "Date" },
                          {
                            id: "num_manutencoes_realizadas",
                            label: "Manutenções Realizadas",
                            type: "number",
                          },
                          {
                            id: "num_manutencoes_pendentes",
                            label: "Manutenções Pendentes",
                            type: "number",
                          },
                        ]}
                      />{" "}
                      <CustomDialog
                        triggerLabel={<FaTrash />}
                        title="Deletar Equipe"
                        TypeButton="Deletar"
                        description=""
                      />
                    </div>
                  )}
                />
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
