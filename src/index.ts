import express from 'express';
import cors from 'cors';
import userRoutes from '../routes/userRoutes';
import '../database/db'; // ✅ importa e executa a conexão/criação do banco

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Usando a rota do UserController
app.use('/', userRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
