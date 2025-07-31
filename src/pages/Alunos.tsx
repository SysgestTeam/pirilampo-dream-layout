import { useState } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Plus, Edit, Trash2, Search, GraduationCap } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface Aluno {
  id: string;
  numero: number;
  nome: string;
  turma: string;
  email: string;
  telefone: string;
  status: "ativo" | "inativo";
}

const alunosData: Aluno[] = [
  { id: "1", numero: 1, nome: "Ana Silva", turma: "9ºA", email: "ana.silva@email.com", telefone: "123456789", status: "ativo" },
  { id: "2", numero: 2, nome: "Bruno Santos", turma: "9ºA", email: "bruno.santos@email.com", telefone: "123456788", status: "ativo" },
  { id: "3", numero: 3, nome: "Carla Oliveira", turma: "9ºB", email: "carla.oliveira@email.com", telefone: "123456787", status: "ativo" },
  { id: "4", numero: 4, nome: "Daniel Costa", turma: "10ºA", email: "daniel.costa@email.com", telefone: "123456786", status: "ativo" },
  { id: "5", numero: 5, nome: "Eva Martins", turma: "10ºA", email: "eva.martins@email.com", telefone: "123456785", status: "ativo" },
  { id: "6", numero: 6, nome: "Fernando Lima", turma: "11ºA", email: "fernando.lima@email.com", telefone: "123456784", status: "ativo" },
];

const turmasOptions = ["9ºA", "9ºB", "10ºA", "10ºB", "11ºA", "12ºA"];

const Alunos = () => {
  const [alunos, setAlunos] = useState(alunosData);
  const [searchTerm, setSearchTerm] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingAluno, setEditingAluno] = useState<Aluno | null>(null);

  const filteredAlunos = alunos.filter(aluno =>
    aluno.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
    aluno.turma.toLowerCase().includes(searchTerm.toLowerCase()) ||
    aluno.numero.toString().includes(searchTerm)
  );

  const handleEdit = (aluno: Aluno) => {
    setEditingAluno(aluno);
    setIsDialogOpen(true);
  };

  const handleDelete = (id: string) => {
    setAlunos(alunos.filter(a => a.id !== id));
  };

  const handleAddNew = () => {
    setEditingAluno(null);
    setIsDialogOpen(true);
  };

  return (
    <MainLayout 
      title="Gestão de Alunos" 
      breadcrumbs={[{ label: "Alunos" }]}
    >
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5" />
                  Alunos
                </CardTitle>
                <CardDescription>Gerir todos os alunos da escola</CardDescription>
              </div>
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button onClick={handleAddNew} className="flex items-center gap-2">
                    <Plus className="h-4 w-4" />
                    Novo Aluno
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-md">
                  <DialogHeader>
                    <DialogTitle>
                      {editingAluno ? "Editar Aluno" : "Novo Aluno"}
                    </DialogTitle>
                    <DialogDescription>
                      {editingAluno 
                        ? "Edite os dados do aluno abaixo."
                        : "Preencha os dados para criar um novo aluno."
                      }
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="numero" className="text-right">Número</Label>
                      <Input id="numero" type="number" placeholder="1" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="nome" className="text-right">Nome</Label>
                      <Input id="nome" placeholder="Nome completo" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="turma" className="text-right">Turma</Label>
                      <Select>
                        <SelectTrigger className="col-span-3">
                          <SelectValue placeholder="Selecione uma turma" />
                        </SelectTrigger>
                        <SelectContent className="bg-background">
                          {turmasOptions.map((turma) => (
                            <SelectItem key={turma} value={turma}>
                              {turma}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="email" className="text-right">Email</Label>
                      <Input id="email" type="email" placeholder="email@exemplo.com" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="telefone" className="text-right">Telefone</Label>
                      <Input id="telefone" placeholder="123456789" className="col-span-3" />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="submit" onClick={() => setIsDialogOpen(false)}>
                      {editingAluno ? "Guardar" : "Criar"}
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
                placeholder="Pesquisar alunos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="max-w-sm"
              />
            </div>
            
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nº</TableHead>
                  <TableHead>Nome</TableHead>
                  <TableHead>Turma</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Telefone</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredAlunos.map((aluno) => (
                  <TableRow key={aluno.id}>
                    <TableCell className="font-medium">{aluno.numero}</TableCell>
                    <TableCell>{aluno.nome}</TableCell>
                    <TableCell>{aluno.turma}</TableCell>
                    <TableCell>{aluno.email}</TableCell>
                    <TableCell>{aluno.telefone}</TableCell>
                    <TableCell>
                      <Badge variant={aluno.status === "ativo" ? "default" : "secondary"}>
                        {aluno.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleEdit(aluno)}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleDelete(aluno.id)}
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

export default Alunos;