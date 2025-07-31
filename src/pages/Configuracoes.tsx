import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Settings, User, Bell, Shield, Database, Palette } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Configuracoes = () => {
  const { toast } = useToast();

  const handleSave = () => {
    toast({
      title: "Configurações guardadas",
      description: "As suas configurações foram guardadas com sucesso.",
    });
  };

  return (
    <MainLayout 
      title="Configurações do Sistema" 
      breadcrumbs={[{ label: "Configurações" }]}
    >
      <div className="space-y-6">
        {/* Perfil do Utilizador */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5" />
              Perfil do Utilizador
            </CardTitle>
            <CardDescription>
              Gerir informações da conta e preferências pessoais
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="nome">Nome completo</Label>
                <Input id="nome" placeholder="Professor João Silva" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="joao.silva@escola.pt" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="telefone">Telefone</Label>
                <Input id="telefone" placeholder="+351 123 456 789" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="departamento">Departamento</Label>
                <Input id="departamento" placeholder="Matemática e Ciências" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Notificações */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5" />
              Notificações
            </CardTitle>
            <CardDescription>
              Configure como quer receber notificações
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="text-base">Notificações por email</Label>
                <div className="text-sm text-muted-foreground">
                  Receber notificações importantes por email
                </div>
              </div>
              <Switch />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="text-base">Lembrete de avaliações pendentes</Label>
                <div className="text-sm text-muted-foreground">
                  Lembrete diário de avaliações por lançar
                </div>
              </div>
              <Switch defaultChecked />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="text-base">Relatórios semanais</Label>
                <div className="text-sm text-muted-foreground">
                  Receber relatório semanal de progresso
                </div>
              </div>
              <Switch />
            </div>
          </CardContent>
        </Card>

        {/* Segurança */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Segurança
            </CardTitle>
            <CardDescription>
              Gerir definições de segurança da conta
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="password-atual">Palavra-passe atual</Label>
              <Input id="password-atual" type="password" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password-nova">Nova palavra-passe</Label>
              <Input id="password-nova" type="password" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password-confirmar">Confirmar nova palavra-passe</Label>
              <Input id="password-confirmar" type="password" />
            </div>
            <Button variant="outline">Alterar Palavra-passe</Button>
          </CardContent>
        </Card>

        {/* Preferências do Sistema */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5" />
              Preferências do Sistema
            </CardTitle>
            <CardDescription>
              Configurar comportamento e aparência do sistema
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="text-base">Modo escuro</Label>
                <div className="text-sm text-muted-foreground">
                  Ativar tema escuro na interface
                </div>
              </div>
              <Switch />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="text-base">Auto-guardar</Label>
                <div className="text-sm text-muted-foreground">
                  Guardar automaticamente as alterações
                </div>
              </div>
              <Switch defaultChecked />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="text-base">Confirmação antes de eliminar</Label>
                <div className="text-sm text-muted-foreground">
                  Pedir confirmação antes de eliminar registos
                </div>
              </div>
              <Switch defaultChecked />
            </div>
          </CardContent>
        </Card>

        {/* Dados e Backup */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="h-5 w-5" />
              Dados e Backup
            </CardTitle>
            <CardDescription>
              Gerir dados da aplicação e backups
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button variant="outline">
                <Database className="h-4 w-4 mr-2" />
                Exportar Dados
              </Button>
              <Button variant="outline">
                <Database className="h-4 w-4 mr-2" />
                Criar Backup
              </Button>
            </div>
            <div className="text-sm text-muted-foreground">
              Último backup: 28 de Janeiro, 2024 às 14:30
            </div>
          </CardContent>
        </Card>

        {/* Guardar Configurações */}
        <div className="flex justify-end">
          <Button onClick={handleSave} size="lg">
            Guardar Todas as Configurações
          </Button>
        </div>
      </div>
    </MainLayout>
  );
};

export default Configuracoes;