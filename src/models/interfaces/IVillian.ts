export interface IVillian {
    nome: string;
    poder: string[];
    inimigo?: string;  // Nome do super-herói ou equipe que é inimigo do vilão
    status: 'Active' | 'Inactive';
    equipe?: string;   // Equipe à qual o vilão pertence, se aplicável
    crimesCometidos: number;  // Número de crimes cometidos pelo vilão
  }
  