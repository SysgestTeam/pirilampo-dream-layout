import { useState } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Plus, Edit, Trash2, Search } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

interface Turma {
  id: string;
  nome: string;
  ano: string;
  totalAlunos: number;
  status: "ativa" | "inativa";
}

const turmasData: Turma[] = [
  { id: "1", nome: "9ºA", ano: "2024", totalAlunos: 28, status: "ativa" },
  { id: "2", nome: "9ºB", ano: "2024", totalAlunos: 25, status: "ativa" },
  { id: "3", nome: "10ºA", ano: "2024", totalAlunos: 30, status: "ativa" },
  { id: "4", nome: "10ºB", ano: "2024", totalAlunos: 27, status: "ativa" },
  { id: "5", nome: "11ºA", ano: "2024", totalAlunos: 24, status: "ativa" },
  { id: "6", nome: "12ºA", ano: "2024", totalAlunos: 22, status: "ativa" },
];

const Turmas = () => {
  const [turmas, setTurmas] = useState(turmasData);
  const [searchTerm, setSearchTerm] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingTurma, setEditingTurma] = useState<Turma | null>(null);

  const filteredTurmas = turmas.filter(turma =>
    turma.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
    turma.ano.includes(searchTerm)
  );

  const handleEdit = (turma: Turma) => {
    setEditingTurma(turma);
    setIsDialogOpen(true);
  };

  const handleDelete = (id: string) => {
    setTurmas(turmas.filter(t => t.id !== id));
  };

  const handleAddNew = () => {
    setEditingTurma(null);
    setIsDialogOpen(true);
  };

  return (
    <MainLayout 
      title="Gestão de Turmas" 
      breadcrumbs={[{ label: "Turmas" }]}
    >
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle>Turmas</CardTitle>
                <CardDescription>Gerir todas as turmas da escola</CardDescription>
              </div>
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button onClick={handleAddNew} className="flex items-center gap-2">
                    <Plus className="h-4 w-4" />
                    Nova Turma
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>
                      {editingTurma ? "Editar Turma" : "Nova Turma"}
                    </DialogTitle>
                    <DialogDescription>
                      {editingTurma 
                        ? "Edite os dados da turma abaixo."
                        : "Preencha os dados para criar uma nova turma."
                      }
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="nome" className="text-right">Nome</Label>
                      <Input id="nome" placeholder="Ex: 9ºA" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="ano" className="text-right">Ano Letivo</Label>
                      <Input id="ano" placeholder="2024" className="col-span-3" />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="submit" onClick={() => setIsDialogOpen(false)}>
                      {editingTurma ? "Guardar" : "Criar"}
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2 mb-4">
              <Search className="h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Pesquisar turmas..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="max-w-sm"
              />
            </div>
            
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nome</TableHead>
                  <TableHead>Ano Letivo</TableHead>
                  <TableHead>Total de Alunos</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredTurmas.map((turma) => (
                  <TableRow key={turma.id}>
                    <TableCell className="font-medium">{turma.nome}</TableCell>
                    <TableCell>{turma.ano}</TableCell>
                    <TableCell>{turma.totalAlunos}</TableCell>
                    <TableCell>
                      <Badge variant={turma.status === "ativa" ? "default" : "secondary"}>
                        {turma.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleEdit(turma)}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleDelete(turma.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default Turmas;