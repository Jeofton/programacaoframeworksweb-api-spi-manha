export interface ISuperhero {
    nome: string;
    poderes: string[];
    equipe?: string;  // Nome da equipe à qual o super-herói pertence, se aplicável
    status: 'Active' | 'Inactive';
    baseOperacional?: string;  // Localização da base do super-herói
    nivelPoder: number;  // Nível de poder do super-herói de 1 a 100
  }