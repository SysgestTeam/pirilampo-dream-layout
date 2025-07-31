export interface Turma {
  id: string;
  nome: string;
  ano: string;
}

export interface Disciplina {
  id: string;
  nome: string;
  codigo: string;
}

export interface Aluno {
  id: string;
  nome: string;
  numero: number;
}

export interface Avaliacao {
  id: string;
  alunoId: string;
  disciplinaId: string;
  turmaId: string;
  trimestre: 1 | 2 | 3;
  av1: number | null;
  mac: number | null;
}

export interface AvaliacaoRow {
  aluno: Aluno;
  trimestre1: {
    av1: number | null;
    mac: number | null;
  };
  trimestre2: {
    av1: number | null;
    mac: number | null;
  };
  trimestre3: {
    av1: number | null;
    mac: number | null;
  };
}