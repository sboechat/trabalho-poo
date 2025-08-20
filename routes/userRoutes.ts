import { Router } from 'express';
import { UserController } from '../controllers/UserController';

const router = Router();

router.get('/', UserController.getRoot);
router.post('/users', UserController.createUser);
router.get('/users', UserController.listUsers);

export default router;
