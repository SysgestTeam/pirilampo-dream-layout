import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { BarChart3, Download, FileText, PieChart } from "lucide-react";
import { useState } from "react";

const Relatorios = () => {
  const [turma, setTurma] = useState("");
  const [disciplina, setDisciplina] = useState("");
  const [trimestre, setTrimestre] = useState("");

  const relatoriosDisponiveis = [
    {
      title: "Relatório de Notas por Turma",
      description: "Visualize as notas de todos os alunos de uma turma específica",
      icon: BarChart3,
      filtros: ["turma", "disciplina", "trimestre"]
    },
    {
      title: "Relatório de Desempenho Geral",
      description: "Análise geral do desempenho dos alunos por disciplina",
      icon: PieChart,
      filtros: ["trimestre"]
    },
    {
      title: "Relatório de Avaliações Pendentes",
      description: "Lista de avaliações que ainda não foram lançadas",
      icon: FileText,
      filtros: ["turma", "disciplina"]
    },
    {
      title: "Estatísticas por Trimestre",
      description: "Comparação de desempenho entre trimestres",
      icon: BarChart3,
      filtros: ["turma", "trimestre"]
    }
  ];

  const turmas = ["9ºA", "9ºB", "10ºA", "10ºB", "11ºA", "12ºA"];
  const disciplinas = ["Matemática", "Português", "História", "Geografia", "Ciências"];
  const trimestres = ["1º Trimestre", "2º Trimestre", "3º Trimestre"];

  const handleGenerateReport = (reportType: string) => {
    console.log(`Gerando relatório: ${reportType}`, { turma, disciplina, trimestre });
    // Aqui seria implementada a lógica de geração do relatório
  };

  return (
    <MainLayout 
      title="Relatórios e Estatísticas" 
      breadcrumbs={[{ label: "Relatórios" }]}
    >
      <div className="space-y-6">
        {/* Filtros Globais */}
        <Card>
          <CardHeader>
            <CardTitle>Filtros</CardTitle>
            <CardDescription>Configure os filtros para os relatórios</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label>Turma</Label>
                <Select value={turma} onValueChange={setTurma}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione uma turma" />
                  </SelectTrigger>
                  <SelectContent className="bg-background">
                    <SelectItem value="">Todas as turmas</SelectItem>
                    {turmas.map((t) => (
                      <SelectItem key={t} value={t}>{t}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Disciplina</Label>
                <Select value={disciplina} onValueChange={setDisciplina}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione uma disciplina" />
                  </SelectTrigger>
                  <SelectContent className="bg-background">
                    <SelectItem value="">Todas as disciplinas</SelectItem>
                    {disciplinas.map((d) => (
                      <SelectItem key={d} value={d}>{d}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Trimestre</Label>
                <Select value={trimestre} onValueChange={setTrimestre}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione um trimestre" />
                  </SelectTrigger>
                  <SelectContent className="bg-background">
                    <SelectItem value="">Todos os trimestres</SelectItem>
                    {trimestres.map((t) => (
                      <SelectItem key={t} value={t}>{t}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Relatórios Disponíveis */}
        <div className="grid gap-4 md:grid-cols-2">
          {relatoriosDisponiveis.map((relatorio, index) => {
            const Icon = relatorio.icon;
            return (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon className="h-5 w-5" />
                    {relatorio.title}
                  </CardTitle>
                  <CardDescription>{relatorio.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-sm text-muted-foreground">
                      <strong>Filtros aplicáveis:</strong>{" "}
                      {relatorio.filtros.map(filtro => 
                        filtro === "turma" ? "Turma" : 
                        filtro === "disciplina" ? "Disciplina" : 
                        "Trimestre"
                      ).join(", ")}
                    </div>
                    <div className="flex gap-2">
                      <Button 
                        className="flex-1"
                        onClick={() => handleGenerateReport(relatorio.title)}
                      >
                        <BarChart3 className="h-4 w-4 mr-2" />
                        Visualizar
                      </Button>
                      <Button 
                        variant="outline"
                        onClick={() => handleGenerateReport(relatorio.title)}
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Exportar
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Estatísticas Rápidas */}
        <Card>
          <CardHeader>
            <CardTitle>Estatísticas Rápidas</CardTitle>
            <CardDescription>Visão geral do desempenho atual</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-primary/5 rounded-lg">
                <div className="text-2xl font-bold text-primary">87%</div>
                <div className="text-sm text-muted-foreground">Taxa de Aprovação</div>
              </div>
              <div className="text-center p-4 bg-secondary/5 rounded-lg">
                <div className="text-2xl font-bold text-secondary-foreground">14.2</div>
                <div className="text-sm text-muted-foreground">Média Geral</div>
              </div>
              <div className="text-center p-4 bg-accent/5 rounded-lg">
                <div className="text-2xl font-bold text-accent-foreground">95%</div>
                <div className="text-sm text-muted-foreground">Avaliações Completas</div>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <div className="text-2xl font-bold">1.234</div>
                <div className="text-sm text-muted-foreground">Total de Alunos</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default Relatorios;