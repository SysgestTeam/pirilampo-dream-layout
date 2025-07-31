import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MainLayout } from "@/components/layout/MainLayout";
import { BarChart3, Users, BookOpen, TrendingUp } from "lucide-react";

const Dashboard = () => {
  const stats = [
    {
      title: "Total de Alunos",
      value: "1.234",
      description: "+20.1% em relação ao mês anterior",
      icon: Users,
    },
    {
      title: "Turmas Ativas",
      value: "45",
      description: "8 turmas do ensino básico",
      icon: Users,
    },
    {
      title: "Disciplinas",
      value: "12",
      description: "Todas as disciplinas ativas",
      icon: BookOpen,
    },
    {
      title: "Avaliações Pendentes",
      value: "87",
      description: "Requer atenção imediata",
      icon: TrendingUp,
    },
  ];

  return (
    <MainLayout 
      title="Dashboard" 
      breadcrumbs={[{ label: "Dashboard" }]}
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">{stat.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7 mt-6">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Visão Geral das Avaliações</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="flex items-center space-x-2 text-sm">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span>1º Trimestre: 95% concluído</span>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex items-center space-x-2 text-sm">
                  <div className="w-3 h-3 bg-secondary rounded-full"></div>
                  <span>2º Trimestre: 78% concluído</span>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex items-center space-x-2 text-sm">
                  <div className="w-3 h-3 bg-muted rounded-full"></div>
                  <span>3º Trimestre: 12% concluído</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Ações Rápidas</CardTitle>
            <CardDescription>Acesso rápido às principais funcionalidades</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-2">
            <div className="grid grid-cols-1 gap-2">
              <div className="bg-primary/10 p-3 rounded-lg">
                <div className="font-medium text-sm">Lançar Avaliações</div>
                <div className="text-xs text-muted-foreground">Acesso rápido ao sistema de avaliações</div>
              </div>
              <div className="bg-secondary/10 p-3 rounded-lg">
                <div className="font-medium text-sm">Relatórios</div>
                <div className="text-xs text-muted-foreground">Visualizar estatísticas e relatórios</div>
              </div>
              <div className="bg-accent/10 p-3 rounded-lg">
                <div className="font-medium text-sm">Gestão de Turmas</div>
                <div className="text-xs text-muted-foreground">Administrar turmas e alunos</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default Dashboard;