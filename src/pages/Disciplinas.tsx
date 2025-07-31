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

interface Disciplina {
  id: string;
  nome: string;
  codigo: string;
  cargaHoraria: number;
  professor: string;
  status: "ativa" | "inativa";
}

const disciplinasData: Disciplina[] = [
  { id: "1", nome: "Matemática", codigo: "MAT", cargaHoraria: 4, professor: "Prof. João Silva", status: "ativa" },
  { id: "2", nome: "Português", codigo: "PORT", cargaHoraria: 4, professor: "Prof.ª Maria Santos", status: "ativa" },
  { id: "3", nome: "História", codigo: "HIST", cargaHoraria: 3, professor: "Prof. Carlos Oliveira", status: "ativa" },
  { id: "4", nome: "Geografia", codigo: "GEO", cargaHoraria: 3, professor: "Prof.ª Ana Costa", status: "ativa" },
  { id: "5", nome: "Ciências", codigo: "CIEN", cargaHoraria: 3, professor: "Prof. Pedro Martins", status: "ativa" },
  { id: "6", nome: "Educação Física", codigo: "EDF", cargaHoraria: 2, professor: "Prof. Ricardo Lima", status: "ativa" },
];

const Disciplinas = () => {
  const [disciplinas, setDisciplinas] = useState(disciplinasData);
  const [searchTerm, setSearchTerm] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingDisciplina, setEditingDisciplina] = useState<Disciplina | null>(null);

  const filteredDisciplinas = disciplinas.filter(disciplina =>
    disciplina.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
    disciplina.codigo.toLowerCase().includes(searchTerm.toLowerCase()) ||
    disciplina.professor.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEdit = (disciplina: Disciplina) => {
    setEditingDisciplina(disciplina);
    setIsDialogOpen(true);
  };

  const handleDelete = (id: string) => {
    setDisciplinas(disciplinas.filter(d => d.id !== id));
  };

  const handleAddNew = () => {
    setEditingDisciplina(null);
    setIsDialogOpen(true);
  };

  return (
    <MainLayout 
      title="Gestão de Disciplinas" 
      breadcrumbs={[{ label: "Disciplinas" }]}
    >
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle>Disciplinas</CardTitle>
                <CardDescription>Gerir todas as disciplinas da escola</CardDescription>
              </div>
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button onClick={handleAddNew} className="flex items-center gap-2">
                    <Plus className="h-4 w-4" />
                    Nova Disciplina
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>
                      {editingDisciplina ? "Editar Disciplina" : "Nova Disciplina"}
                    </DialogTitle>
                    <DialogDescription>
                      {editingDisciplina 
                        ? "Edite os dados da disciplina abaixo."
                        : "Preencha os dados para criar uma nova disciplina."
                      }
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="nome" className="text-right">Nome</Label>
                      <Input id="nome" placeholder="Ex: Matemática" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="codigo" className="text-right">Código</Label>
                      <Input id="codigo" placeholder="MAT" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="carga" className="text-right">Carga Horária</Label>
                      <Input id="carga" type="number" placeholder="4" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="professor" className="text-right">Professor</Label>
                      <Input id="professor" placeholder="Nome do professor" className="col-span-3" />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="submit" onClick={() => setIsDialogOpen(false)}>
                      {editingDisciplina ? "Guardar" : "Criar"}
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
                placeholder="Pesquisar disciplinas..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="max-w-sm"
              />
            </div>
            
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nome</TableHead>
                  <TableHead>Código</TableHead>
                  <TableHead>Carga Horária</TableHead>
                  <TableHead>Professor</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredDisciplinas.map((disciplina) => (
                  <TableRow key={disciplina.id}>
                    <TableCell className="font-medium">{disciplina.nome}</TableCell>
                    <TableCell>{disciplina.codigo}</TableCell>
                    <TableCell>{disciplina.cargaHoraria}h/semana</TableCell>
                    <TableCell>{disciplina.professor}</TableCell>
                    <TableCell>
                      <Badge variant={disciplina.status === "ativa" ? "default" : "secondary"}>
                        {disciplina.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleEdit(disciplina)}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleDelete(disciplina.id)}
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

export default Disciplinas;