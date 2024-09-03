// src/index.ts
import express, { Application } from 'express';
import mongoose from 'mongoose';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
// import { errorMiddleware } from './middlewares/errorMiddleware';
// import superheroRoutes from './routes/superheroRoutes';
// import villainRoutes from './routes/villainRoutes';
// import teamRoutes from './routes/teamRoutes';

// Configurações de Variáveis de Ambiente
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/comicbookdb';

const app: Application = express();

// Middlewares globais
app.use(helmet()); // Segurança HTTP
app.use(cors()); // Habilita CORS
app.use(express.json()); // Parser JSON
app.use(morgan('dev')); // Logger HTTP

// Conectar ao MongoDB
mongoose.connect(MONGO_URI)
  .then(() => console.log('Conectado ao MongoDB com sucesso!'))
  .catch(err => console.error('Erro ao conectar ao MongoDB:', err));

// Definição das Rotas
// app.use('/api/superheroes', superheroRoutes);
// app.use('/api/villains', villainRoutes);
// app.use('/api/teams', teamRoutes);

// // Middleware de Tratamento de Erros
// app.use(errorMiddleware);

export default app;
