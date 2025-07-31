import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Turma, Disciplina } from "@/types/avaliacoes";

interface FiltrosAvaliacoesProps {
  turmas: Turma[];
  disciplinas: Disciplina[];
  turmaSelecionada: string;
  disciplinaSelecionada: string;
  onTurmaChange: (turmaId: string) => void;
  onDisciplinaChange: (disciplinaId: string) => void;
}

export const FiltrosAvaliacoes = ({
  turmas,
  disciplinas,
  turmaSelecionada,
  disciplinaSelecionada,
  onTurmaChange,
  onDisciplinaChange,
}: FiltrosAvaliacoesProps) => {
  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>Filtros de Avaliação</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="turma">Turma</Label>
            <Select value={turmaSelecionada} onValueChange={onTurmaChange}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione uma turma" />
              </SelectTrigger>
              <SelectContent className="bg-background">
                {turmas.map((turma) => (
                  <SelectItem key={turma.id} value={turma.id}>
                    {turma.nome} - {turma.ano}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="disciplina">Disciplina</Label>
            <Select value={disciplinaSelecionada} onValueChange={onDisciplinaChange}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione uma disciplina" />
              </SelectTrigger>
              <SelectContent className="bg-background">
                {disciplinas.map((disciplina) => (
                  <SelectItem key={disciplina.id} value={disciplina.id}>
                    {disciplina.nome}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};