import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { GraduationCap } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-6">
        <div className="flex justify-center mb-6">
          <GraduationCap className="h-16 w-16 text-primary" />
        </div>
        <h1 className="text-4xl font-bold mb-4">Sistema de Avaliações Pirilampo</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Gerencie as avaliações dos alunos de forma simples e eficiente
        </p>
        <Button 
          onClick={() => navigate("/avaliacoes")}
          size="lg"
          className="text-lg px-8 py-3"
        >
          Aceder às Avaliações
        </Button>
      </div>
    </div>
  );
};

export default Index;
