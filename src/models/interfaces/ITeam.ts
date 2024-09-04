export interface ITeam {
    nome: string;
    membros: string[];  // Lista de nomes dos membros (super-heróis ou vilões)
    base: string;       // Localização da base da equipe
    objetivo: string;   // Objetivo ou missão principal da equipe
    status: 'Active' | 'Inactive';
  }
  