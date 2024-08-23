'use client';
import { Aside } from "../components/aside";
import { Footer } from "../components/footer";
import { FaEdit, FaTrash } from "react-icons/fa";
import Table from "../components/table";
import { CustomDialog } from "../components/dialog";


export default function userPage() {
  const columns = [
    { header: "Username", accessor: "username" },
    { header: "Data de nascimento", accessor: "data_de_nascimento" },
    { header: "Email", accessor: "email" },
    { header: "Primeiro login", accessor: "primeiro_login" },
    { header: "Último login", accessor: "ultimo_login" },
  ];

  const data = [
    {
      username: "Weverton",
      data_de_nascimento: "13/01/1988",
      email: "weverton@palmeiras.com",
      primeiro_login: "15/01/2024",
      ultimo_login: "20/07/2024",
      editar: <FaEdit />,
      deletar: <FaTrash />,
    },
    {
      username: "Gustavo Gómez",
      data_de_nascimento: "06/05/1993",
      email: "gomez@palmeiras.com",
      primeiro_login: "17/02/2024",
      ultimo_login: "22/06/2024",
      editar: <FaEdit />,
      deletar: <FaTrash />,
    },
    {
      username: "Zé Rafael",
      data_de_nascimento: "16/06/1993",
      email: "ze.rafael@palmeiras.com",
      primeiro_login: "10/03/2024",
      ultimo_login: "14/07/2024",
      editar: <FaEdit />,
      deletar: <FaTrash />,
    },
    {
      username: "Dudu",
      data_de_nascimento: "07/01/1992",
      email: "dudu@palmeiras.com",
      primeiro_login: "20/03/2024",
      ultimo_login: "18/08/2024",
      editar: <FaEdit />,
      deletar: <FaTrash />,
    },
    {
      username: "Raphael Veiga",
      data_de_nascimento: "19/06/1995",
      email: "veiga@palmeiras.com",
      primeiro_login: "25/04/2024",
      ultimo_login: "22/08/2024",
      editar: <FaEdit />,
      deletar: <FaTrash />,
    },
    {
      username: "Rony",
      data_de_nascimento: "11/05/1995",
      email: "rony@palmeiras.com",
      primeiro_login: "05/05/2024",
      ultimo_login: "12/07/2024",
      editar: <FaEdit />,
      deletar: <FaTrash />,
    },
    {
      username: "Endrick",
      data_de_nascimento: "21/07/2006",
      email: "endrick@palmeiras.com",
      primeiro_login: "12/06/2024",
      ultimo_login: "19/07/2024",
      editar: <FaEdit />,
      deletar: <FaTrash />,
    },
    {
      username: "Murilo",
      data_de_nascimento: "27/03/1997",
      email: "murilo@palmeiras.com",
      primeiro_login: "07/07/2024",
      ultimo_login: "24/08/2024",
      editar: <FaEdit />,
      deletar: <FaTrash />,
    },
    {
      username: "Piquerez",
      data_de_nascimento: "24/08/1998",
      email: "piquerez@palmeiras.com",
      primeiro_login: "15/08/2024",
      ultimo_login: "25/08/2024",
      editar: <FaEdit />,
      deletar: <FaTrash />,
    },
    {
      username: "Gabriel Menino",
      data_de_nascimento: "29/09/2000",
      email: "menino@palmeiras.com",
      primeiro_login: "17/08/2024",
      ultimo_login: "30/08/2024",
      editar: <FaEdit />,
      deletar: <FaTrash />,
    },
    {
      username: "Mayke",
      data_de_nascimento: "10/11/1992",
      email: "mayke@palmeiras.com",
      primeiro_login: "28/08/2024",
      ultimo_login: "31/08/2024",
      editar: <FaEdit />,
      deletar: <FaTrash />,
    },
    {
      username: "Marcos Rocha",
      data_de_nascimento: "11/12/1988",
      email: "marcos.rocha@palmeiras.com",
      primeiro_login: "10/09/2024",
      ultimo_login: "20/09/2024",
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
                Usuários
              </h1>
             
            </header>

            <div className="flex-1">
              <div className="container mx-auto p-4 bg-background rounded-lg">
                <div className="flex justify-between items-center mb-4">
                  <h1 className="text-2xl font-bold text-foreground">
                    Lista de usuários cadastrados
                  </h1>
                  <CustomDialog
                    triggerLabel="Criar Usuário"
                    title="Criar Usuário"
                    TypeButton="Criar"
                    description="Insira todos os campos corretamente!"
                    fields={[
                      { id: "username", label: "Username", type: "text" },
                      {
                        id: "data_nascimento",
                        label: "Data de nascimento",
                        type: "Date",
                      },
                      { id: "email", label: "Email", type: "email" },
                      { id: "senha", label: "Senha", type: "password" },
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
                          title="Editar Usuário"
                          TypeButton="Editar"
                          description="Insira todos os campos corretamente!"
                          fields={[
                            { id: "username", label: "Username", type: "text" },
                            {
                              id: "data_nascimento",
                              label: "Data de nascimento",
                              type: "Date",
                            },
                            { id: "email", label: "Email", type: "email" },
                            { id: "senha", label: "Senha", type: "password" },
                          ]}
                        />{" "}
                        <CustomDialog
                          triggerLabel={<FaTrash />}
                          title="Deletar Usuário "
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
