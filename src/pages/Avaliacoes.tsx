import { useState, useEffect } from "react";
import { FiltrosAvaliacoes } from "@/components/avaliacoes/FiltrosAvaliacoes";
import { GrelhaAvaliacoes } from "@/components/avaliacoes/GrelhaAvaliacoes";
import { Turma, Disciplina, Aluno, AvaliacaoRow } from "@/types/avaliacoes";
import { Button } from "@/components/ui/button";
import { Save } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

// Dados de exemplo - em produção viriam de uma API
const turmasExample: Turma[] = [
  { id: "1", nome: "9ºA", ano: "2024" },
  { id: "2", nome: "9ºB", ano: "2024" },
  { id: "3", nome: "10ºA", ano: "2024" },
];

const disciplinasExample: Disciplina[] = [
  { id: "1", nome: "Matemática", codigo: "MAT" },
  { id: "2", nome: "Português", codigo: "PORT" },
  { id: "3", nome: "História", codigo: "HIST" },
  { id: "4", nome: "Geografia", codigo: "GEO" },
];

const alunosExample: Aluno[] = [
  { id: "1", nome: "Ana Silva", numero: 1 },
  { id: "2", nome: "Bruno Santos", numero: 2 },
  { id: "3", nome: "Carla Oliveira", numero: 3 },
  { id: "4", nome: "Daniel Costa", numero: 4 },
  { id: "5", nome: "Eva Martins", numero: 5 },
];

const Avaliacoes = () => {
  const [turmaSelecionada, setTurmaSelecionada] = useState("");
  const [disciplinaSelecionada, setDisciplinaSelecionada] = useState("");
  const [avaliacoes, setAvaliacoes] = useState<AvaliacaoRow[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    if (turmaSelecionada && disciplinaSelecionada) {
      // Simular carregamento de avaliações
      const avaliacoesIniciais: AvaliacaoRow[] = alunosExample.map(aluno => ({
        aluno,
        trimestre1: { av1: null, mac: null },
        trimestre2: { av1: null, mac: null },
        trimestre3: { av1: null, mac: null },
      }));
      setAvaliacoes(avaliacoesIniciais);
    } else {
      setAvaliacoes([]);
    }
  }, [turmaSelecionada, disciplinaSelecionada]);

  const handleAvaliacaoChange = (
    alunoId: string,
    trimestre: 1 | 2 | 3,
    campo: 'av1' | 'mac',
    valor: number | null
  ) => {
    setAvaliacoes(prev => prev.map(row => {
      if (row.aluno.id === alunoId) {
        return {
          ...row,
          [`trimestre${trimestre}`]: {
            ...row[`trimestre${trimestre}` as keyof Omit<AvaliacaoRow, 'aluno'>],
            [campo]: valor
          }
        };
      }
      return row;
    }));
  };

  const handleSave = () => {
    toast({
      title: "Avaliações guardadas",
      description: "As avaliações foram guardadas com sucesso.",
    });
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Gestão de Avaliações</h1>
          {turmaSelecionada && disciplinaSelecionada && (
            <Button onClick={handleSave} className="flex items-center gap-2">
              <Save className="h-4 w-4" />
              Guardar Avaliações
            </Button>
          )}
        </div>

        <FiltrosAvaliacoes
          turmas={turmasExample}
          disciplinas={disciplinasExample}
          turmaSelecionada={turmaSelecionada}
          disciplinaSelecionada={disciplinaSelecionada}
          onTurmaChange={setTurmaSelecionada}
          onDisciplinaChange={setDisciplinaSelecionada}
        />

        {turmaSelecionada && disciplinaSelecionada ? (
          <GrelhaAvaliacoes
            avaliacoes={avaliacoes}
            onAvaliacaoChange={handleAvaliacaoChange}
          />
        ) : (
          <div className="text-center py-12 text-muted-foreground">
            <p>Selecione uma turma e disciplina para visualizar as avaliações</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Avaliacoes;