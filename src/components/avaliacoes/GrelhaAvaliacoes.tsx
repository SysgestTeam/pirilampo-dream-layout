import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AvaliacaoRow } from "@/types/avaliacoes";

interface GrelhaAvaliacoesProps {
  avaliacoes: AvaliacaoRow[];
  onAvaliacaoChange: (alunoId: string, trimestre: 1 | 2 | 3, campo: 'av1' | 'mac', valor: number | null) => void;
}

export const GrelhaAvaliacoes = ({ avaliacoes, onAvaliacaoChange }: GrelhaAvaliacoesProps) => {
  const handleInputChange = (alunoId: string, trimestre: 1 | 2 | 3, campo: 'av1' | 'mac', value: string) => {
    const numericValue = value === '' ? null : parseFloat(value);
    if (numericValue !== null && (numericValue < 0 || numericValue > 20)) return;
    onAvaliacaoChange(alunoId, trimestre, campo, numericValue);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Grelha de Avaliações - 3 Trimestres</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead rowSpan={2} className="text-center border-r">Nº</TableHead>
                <TableHead rowSpan={2} className="text-center border-r">Nome do Aluno</TableHead>
                <TableHead colSpan={2} className="text-center border-r bg-muted">1º Trimestre</TableHead>
                <TableHead colSpan={2} className="text-center border-r bg-muted">2º Trimestre</TableHead>
                <TableHead colSpan={2} className="text-center bg-muted">3º Trimestre</TableHead>
              </TableRow>
              <TableRow>
                <TableHead className="text-center border-r">AV1</TableHead>
                <TableHead className="text-center border-r">MAC</TableHead>
                <TableHead className="text-center border-r">AV1</TableHead>
                <TableHead className="text-center border-r">MAC</TableHead>
                <TableHead className="text-center border-r">AV1</TableHead>
                <TableHead className="text-center">MAC</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {avaliacoes.map((row) => (
                <TableRow key={row.aluno.id}>
                  <TableCell className="text-center border-r font-medium">
                    {row.aluno.numero}
                  </TableCell>
                  <TableCell className="border-r font-medium">
                    {row.aluno.nome}
                  </TableCell>
                  
                  {/* 1º Trimestre */}
                  <TableCell className="border-r">
                    <Input
                      type="number"
                      min="0"
                      max="20"
                      step="0.1"
                      value={row.trimestre1.av1 ?? ''}
                      onChange={(e) => handleInputChange(row.aluno.id, 1, 'av1', e.target.value)}
                      className="w-16 text-center"
                      placeholder="0.0"
                    />
                  </TableCell>
                  <TableCell className="border-r">
                    <Input
                      type="number"
                      min="0"
                      max="20"
                      step="0.1"
                      value={row.trimestre1.mac ?? ''}
                      onChange={(e) => handleInputChange(row.aluno.id, 1, 'mac', e.target.value)}
                      className="w-16 text-center"
                      placeholder="0.0"
                    />
                  </TableCell>
                  
                  {/* 2º Trimestre */}
                  <TableCell className="border-r">
                    <Input
                      type="number"
                      min="0"
                      max="20"
                      step="0.1"
                      value={row.trimestre2.av1 ?? ''}
                      onChange={(e) => handleInputChange(row.aluno.id, 2, 'av1', e.target.value)}
                      className="w-16 text-center"
                      placeholder="0.0"
                    />
                  </TableCell>
                  <TableCell className="border-r">
                    <Input
                      type="number"
                      min="0"
                      max="20"
                      step="0.1"
                      value={row.trimestre2.mac ?? ''}
                      onChange={(e) => handleInputChange(row.aluno.id, 2, 'mac', e.target.value)}
                      className="w-16 text-center"
                      placeholder="0.0"
                    />
                  </TableCell>
                  
                  {/* 3º Trimestre */}
                  <TableCell className="border-r">
                    <Input
                      type="number"
                      min="0"
                      max="20"
                      step="0.1"
                      value={row.trimestre3.av1 ?? ''}
                      onChange={(e) => handleInputChange(row.aluno.id, 3, 'av1', e.target.value)}
                      className="w-16 text-center"
                      placeholder="0.0"
                    />
                  </TableCell>
                  <TableCell>
                    <Input
                      type="number"
                      min="0"
                      max="20"
                      step="0.1"
                      value={row.trimestre3.mac ?? ''}
                      onChange={(e) => handleInputChange(row.aluno.id, 3, 'mac', e.target.value)}
                      className="w-16 text-center"
                      placeholder="0.0"
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};