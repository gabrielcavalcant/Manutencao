"use client";
import { Aside } from "@/app/components/aside";
import { Footer } from "@/app/components/footer";
import { FaEdit, FaTrash } from "react-icons/fa";
import Table from "@/app/components/table";
import { CustomDialog } from "@/app/components/dialog";

export default function MaquinasPage() {
  const columns = [
    { header: "Nome", accessor: "nome" },
    { header: "Tipo", accessor: "tipo" },
    { header: "Modelo", accessor: "modelo" },
    { header: "Data de Fabricação", accessor: "data_fabricacao" },
    {
      header: "Número de Série",
      accessor: "num_serie",
    },
    { header: "Localização", accessor: "localizacao" },
  ];

  const data = [
    {
      nome: "Máquina Abel",
      tipo: "Tática",
      modelo: 2024,
      data_fabricacao: "01/02/2024",
      num_serie: "SN987654321",
      localizacao: "Allianz Parque - Sala de Análise",
      editar: <FaEdit />,
      deletar: <FaTrash />,
    },
    {
      nome: "Máquina Dudu",
      tipo: "Atacante",
      modelo: 2024,
      data_fabricacao: "03/03/2024",
      num_serie: "SN123456780",
      localizacao: "Centro de Treinamento - Campo A",
      editar: <FaEdit />,
      deletar: <FaTrash />,
    },
    {
      nome: "Máquina Gómez",
      tipo: "Defensiva",
      modelo: 2024,
      data_fabricacao: "10/04/2024",
      num_serie: "SN123450987",
      localizacao: "Academia de Futebol - Setor Defensivo",
      editar: <FaEdit />,
      deletar: <FaTrash />,
    },
    {
      nome: "Máquina Weverton",
      tipo: "Goleiro",
      modelo: 2024,
      data_fabricacao: "15/05/2024",
      num_serie: "SN555666777",
      localizacao: "Allianz Parque - Área de Gol",
      editar: <FaEdit />,
      deletar: <FaTrash />,
    },
    {
      nome: "Máquina Veiga",
      tipo: "Meio-Campo",
      modelo: 2024,
      data_fabricacao: "20/06/2024",
      num_serie: "SN777888999",
      localizacao: "Centro de Treinamento - Sala Técnica",
      editar: <FaEdit />,
      deletar: <FaTrash />,
    },
    {
      nome: "Máquina Rony",
      tipo: "Atacante",
      modelo: 2024,
      data_fabricacao: "25/07/2024",
      num_serie: "SN888999000",
      localizacao: "Academia de Futebol - Setor Ofensivo",
      editar: <FaEdit />,
      deletar: <FaTrash />,
    },
    {
      nome: "Máquina Zé Rafael",
      tipo: "Meio-Campo",
      modelo: 2024,
      data_fabricacao: "30/08/2024",
      num_serie: "SN999000111",
      localizacao: "Allianz Parque - Centro de Operações",
      editar: <FaEdit />,
      deletar: <FaTrash />,
    },
  ];

  const TypeOptions = [
    { value: "maquinas", label: "Máquinas" },
    { value: "pecas", label: "Peças" },
  ];

  return (
    <div className="h-screen flex flex-col">
      <div className="flex-1 flex">
        <Aside />
        <main className="flex-1 flex flex-col p-6 bg-background">
          <header className="text-left p-4 rounded-md mb-6 flex justify-between">
            <h1 className="text-4xl font-bold uppercase text-foreground">
              Máquinas
            </h1>
          </header>

          <div className="flex-1">
            <div className="container mx-auto p-4 bg-background rounded-lg">
              <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold text-foreground">
                  Lista de Máquinas Cadastradas
                </h1>
                <CustomDialog
                  triggerLabel="Cadastrar Máquinas"
                  title="Cadastrar Máquinas"
                  TypeButton="Cadastrar"
                  description="Insira todos os campos corretamente!"
                  fields={[
                    { id: "nome", label: "Nome", type: "text" },
                    {
                      id: "tipo",
                      label: "Tipo",
                      type: "Text",
                    },
                    {
                      id: "modelo",
                      label: "Modelo",
                      type: "number",
                    },
                    {
                      id: "data_fabricacao",
                      label: "Data de Fabricação",
                      type: "Date",
                    },
                    {
                      id: "num_serie",
                      label: "Número de Série",
                      type: "number",
                    },
                    {
                      id: "localizacao",
                      label: "Localização",
                      type: "text",
                    },
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
                        title="Editar Máquinas"
                        TypeButton="Editar"
                        description="Insira todos os campos corretamente!"
                        fields={[
                          { id: "nome", label: "Nome", type: "text" },
                          {
                            id: "tipo",
                            label: "Tipo",
                            type: "Text",
                          },
                          {
                            id: "modelo",
                            label: "Modelo",
                            type: "number",
                          },
                          {
                            id: "data_fabricacao",
                            label: "Data de Fabricação",
                            type: "Date",
                          },
                          {
                            id: "num_serie",
                            label: "Número de Série",
                            type: "number",
                          },
                          {
                            id: "localizacao",
                            label: "Localização",
                            type: "text",
                          },
                        ]}
                      />{" "}
                      <CustomDialog
                        triggerLabel={<FaTrash />}
                        title="Deletar Máquina"
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
