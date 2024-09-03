// src/server.ts
import app from './index';

// Porta do Servidor
const PORT = process.env.PORT || 3000;

// Inicializa o Servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
