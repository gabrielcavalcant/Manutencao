"use client";
import { Aside } from "../components/aside";
import { Footer } from "../components/footer";
import Table from "../components/table";
import { FcHighPriority } from "react-icons/fc";
import { CustomDialog } from "../components/dialog";
import { FaEdit, FaTrash, FaCheck } from "react-icons/fa";

export default function ManutencaoPage() {
  const cards = [
    {
      color: "border bg-gray-300",
      maintenance_id: "1",
      text: "Allianz Parque",
      reason: "Problema na iluminação",
      icon: <FcHighPriority size={48} />,
      description: "Detalhes da manutenção do Allianz Parque.",
      person: "Dudu",
      priority: "Média",
      equip: "Equipe Verdão",
      status: "Pendente",
      date: "02/08/2024",
    },
    {
      color: "border bg-gray-300",
      maintenance_id: "2",
      text: "Centro de Treinamento",
      reason: "Quebra de equipamento",
      icon: <FcHighPriority size={48} />,
      description: "Detalhes da manutenção do Centro de Treinamento.",
      person: "Endrick",
      priority: "Alta",
      status: "Pendente",
      equip: "Equipe Verdão",
      date: "02/08/2024",
    },
    {
      color: "border bg-gray-300",
      maintenance_id: "3",
      reason: "Falha no sistema de som",
      text: "Academia de Futebol",
      icon: <FcHighPriority size={48} />,
      description: "Detalhes da manutenção da Academia de Futebol.",
      person: "Rony",
      priority: "Média",
      status: "Pendente",
      equip: "Equipe Verdão",
      date: "02/08/2024",
    },
    {
      color: "border bg-gray-300",
      maintenance_id: "4",
      reason: "Problema no sistema de ar condicionado",
      text: "Estádio Palestra Itália",
      icon: <FcHighPriority size={48} />,
      description: "Detalhes da manutenção do Estádio Palestra Itália.",
      person: "Gómez",
      priority: "Alta",
      status: "Pendente",
      equip: "Equipe Verdão",
      date: "02/08/2024",
    },
    {
      color: "border bg-gray-300",
      maintenance_id: "5",
      reason: "Problema na irrigação do campo",
      text: "Estádio Palestra Itália",
      icon: <FcHighPriority size={48} />,
      description: "Detalhes da manutenção do Estádio Palestra Itália.",
      person: "Gómez",
      priority: "Alta",
      status: "Pendente",
      equip: "Equipe Verdão",
      date: "02/08/2024",
    },
    {
      color: "border bg-gray-300",
      maintenance_id: "6",
      reason: "Problema na pintura",
      text: "Centro de Excelência",
      icon: <FcHighPriority size={48} />,
      description: "Detalhes da manutenção do Centro de Excelência.",
      person: "Veiga",
      priority: "Média",
      status: "Pendente",
      equip: "Equipe Verdão",
      date: "02/08/2024",
    },
    {
      color: "border bg-gray-300",
      maintenance_id: "7",
      reason: "Reparo nos refletores",
      text: "Allianz Parque",
      icon: <FcHighPriority size={48} />,
      description: "Detalhes da manutenção do Allianz Parque.",
      person: "Zé Rafael",
      priority: "Média",
      status: "Pendente",
      equip: "Equipe Verdão",
      date: "02/08/2024",
    },
    {
      color: "border bg-gray-300",
      maintenance_id: "8",
      reason: "Reparo na estrutura",
      text: "Academia de Futebol",
      icon: <FcHighPriority size={48} />,
      description: "Detalhes da manutenção da Academia de Futebol.",
      person: "Murilo",
      priority: "Alta",
      status: "Pendente",
      equip: "Equipe Verdão",
      date: "02/08/2024",
    },
    {
      color: "border bg-gray-300",
      maintenance_id: "9",
      reason: "Reparo no sistema de irrigação",
      text: "Centro de Treinamento",
      icon: <FcHighPriority size={48} />,
      description: "Detalhes da manutenção do Centro de Treinamento.",
      person: "Piquerez",
      priority: "Média",
      status: "Em andamento",
      equip: "Equipe Verdão",
      date: "02/08/2024",
    },
    {
      color: "border bg-gray-300",
      maintenance_id: "12",
      reason: "Reparo nos vestiários",
      text: "Allianz Parque",
      icon: <FcHighPriority size={48} />,
      description: "Detalhes da manutenção do Allianz Parque.",
      person: "Abel Ferreira",
      priority: "Alta",
      status: "Pendente",
      equip: "Equipe Verdão",
      date: "02/08/2024",
    },
  ];

  const cards2 = [
    {
      color: "border bg-gray-300",
      maintenance_id: "10",
      reason: "Problema resolvido",
      text: "Estádio Palestra Itália",
      icon: <FcHighPriority size={48} />,
      description: "Detalhes da manutenção do Estádio Palestra Itália.",
      person: "Abel Ferreira",
      priority: "Alta",
      status: "Concluída",
      equip: "Equipe Verdão",
      date: "02/08/2024",
    },
    {
      color: "border bg-gray-300",
      maintenance_id: "11",
      reason: "Manutenção cancelada",
      text: "Centro de Treinamento",
      icon: <FcHighPriority size={48} />,
      description: "Detalhes da manutenção do Centro de Treinamento.",
      person: "Gómez",
      priority: "Média",
      status: "Cancelada",
      equip: "Equipe Verdão",
      date: "02/08/2024",
    },
  ];

  const statusOptions = [
    { value: "pendente", label: "Pendente" },
    { value: "em andamento", label: "Em andamento" },
    { value: "concluída", label: "Concluída" },
    { value: "cancelada", label: "Cancelada" },
  ];

  const getStatusClass = (status: string) => {
    switch (status) {
      case "Pendente":
        return "bg-yellow-100 text-yellow-800";
      case "Em andamento":
        return "bg-blue-100 text-blue-800";
      case "Concluída":
        return "bg-green-100 text-green-800";
      case "Cancelada":
        return "bg-red-100 text-red-800";
      default:
        return "";
    }
  };

  const PriorityOptions = [
    { value: "minimo", label: "Mínima" },
    { value: "media", label: "Média" },
    { value: "maximo", label: "Máxima" },
  ];

  const EquipOptions = [
    { value: "equipe_verdao", label: "Equipe Verdão" },
    { value: "equipe_palestra", label: "Equipe Palestra" },
    { value: "equipe_academia", label: "Equipe Academia" },
  ];

  const columns = [
    { header: "Descrição", accessor: "text" },
    { header: "Razão", accessor: "reason" },
    { header: "Prioridade", accessor: "priority" },
    { header: "Descrição", accessor: "description" },
    { header: "Responsável", accessor: "person" },
    { header: "Equipe", accessor: "equip" },
    { header: "Status", accessor: "status" },
    { header: "Data", accessor: "date" },
  ];

  const formattedDataMan = cards.map((item) => ({
    ...item,
    status: (
      <span className={`px-2 py-1 rounded ${getStatusClass(item.status)}`}>
        {item.status}
      </span>
    ),
  }));

  const formattedDataHist = cards2.map((item) => ({
    ...item,
    status: (
      <span className={`px-2 py-1 rounded ${getStatusClass(item.status)}`}>
        {item.status}
      </span>
    ),
  }));

  return (
    <div className="h-screen flex flex-col">
      <div className="flex-1 flex">
        <Aside />
        <main className="flex-1 flex flex-col p-6 bg-background w-full">
          <div className="flex items-center justify-between p-4 rounded-md mb-6">
            <h1 className="text-4xl font-bold uppercase text-foreground">
              Manutenções
            </h1>
          </div>
          <div className="rounded-md container mx-auto p-4 bg-background w-full">
            <div className="text-2xl font-bold text-foreground mb-4">
              Histórico de Manutenções
            </div>
            <Table data={formattedDataMan} columns={columns} />
            <div className="text-2xl font-bold text-foreground my-4">
              Histórico de Manutenções
            </div>
            <Table data={formattedDataHist} columns={columns} />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
