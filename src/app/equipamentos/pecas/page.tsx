"use client";
import { Aside } from "@/app/components/aside";
import { Footer } from "@/app/components/footer";
import { FaEdit, FaTrash } from "react-icons/fa";
import Table from "@/app/components/table";
import { CustomDialog } from "@/app/components/dialog";

export default function PecasPage() {
  const columns = [
    { header: "Nome", accessor: "nome" },
    { header: "Tipo", accessor: "tipo" },
    { header: "Modelo", accessor: "modelo" },
    { header: "Data fabricação", accessor: "data_fabricacao" },
    {
      header: "Número Série",
      accessor: "num_serie",
    },
    { header: "Localização", accessor: "localizacao" },
  ];

  const data = [
    {
      nome: "Máquina Dudu",
      tipo: "Industrial",
      modelo: 2023,
      data_fabricacao: "03/01/2023",
      num_serie: "SN19141942",
      localizacao: "Allianz Parque - Setor A",
      editar: <FaEdit />,
      deletar: <FaTrash />,
    },
    {
      nome: "Máquina Rony",
      tipo: "Industrial",
      modelo: 2022,
      data_fabricacao: "15/05/2022",
      num_serie: "SN101011",
      localizacao: "Academia de Futebol - Setor B",
      editar: <FaEdit />,
      deletar: <FaTrash />,
    },
    {
      nome: "Máquina Veiga",
      tipo: "Industrial",
      modelo: 2021,
      data_fabricacao: "25/07/2021",
      num_serie: "SN999999",
      localizacao: "Allianz Parque - Setor C",
      editar: <FaEdit />,
      deletar: <FaTrash />,
    },
    {
      nome: "Máquina Zé Rafael",
      tipo: "Industrial",
      modelo: 2020,
      data_fabricacao: "12/12/2020",
      num_serie: "SN123456",
      localizacao: "Academia de Futebol - Setor D",
      editar: <FaEdit />,
      deletar: <FaTrash />,
    },
    {
      nome: "Máquina Gómez",
      tipo: "Industrial",
      modelo: 2019,
      data_fabricacao: "10/10/2019",
      num_serie: "SN654321",
      localizacao: "Allianz Parque - Setor E",
      editar: <FaEdit />,
      deletar: <FaTrash />,
    },
    {
      nome: "Máquina Endrick",
      tipo: "Industrial",
      modelo: 2024,
      data_fabricacao: "02/02/2024",
      num_serie: "SN567890",
      localizacao: "Academia de Futebol - Setor F",
      editar: <FaEdit />,
      deletar: <FaTrash />,
    },
    {
      nome: "Máquina Zé Roberto",
      tipo: "Industrial",
      modelo: 2017,
      data_fabricacao: "20/04/2017",
      num_serie: "SN112233",
      localizacao: "Allianz Parque - Setor G",
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
              Peças
            </h1>
          </header>

          <div className="flex-1">
            <div className="container mx-auto p-4 bg-background rounded-lg">
              <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold text-foreground">
                  Lista de Peças cadastradas
                </h1>
                <CustomDialog
                  triggerLabel="Cadastrar Peças"
                  title="Cadastrar Peças"
                  TypeButton="Cadastrar"
                  description="Insira todos os campos corretamente!"
                  fields={[
                    { id: "nome", label: "Nome", type: "text" },
                    {
                      id: "tipo",
                      label: "Tipo",
                      type: "text",
                    },
                    {
                      id: "modelo",
                      label: "Modelo",
                      type: "number",
                    },
                    {
                      id: "data_fabricacao",
                      label: "Data fabricação",
                      type: "date",
                    },
                    {
                      id: "num_serie",
                      label: "Número de Série",
                      type: "text",
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
                        title="Editar Peças"
                        TypeButton="Editar"
                        description="Insira todos os campos corretamente!"
                        fields={[
                          { id: "nome", label: "Nome", type: "text" },
                          {
                            id: "tipo",
                            label: "Tipo",
                            type: "text",
                          },
                          {
                            id: "modelo",
                            label: "Modelo",
                            type: "number",
                          },
                          {
                            id: "data_fabricacao",
                            label: "Data fabricação",
                            type: "date",
                          },
                          {
                            id: "num_serie",
                            label: "Número de Série",
                            type: "text",
                          },
                          {
                            id: "localizacao",
                            label: "Localização",
                            type: "text",
                          },
                        ]}
                      />
                      <CustomDialog
                        triggerLabel={<FaTrash />}
                        title="Deletar Peça"
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
