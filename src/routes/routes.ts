import Router from 'express'; 
import { validatePassword } from '../controllers/validate-password';

export const router = Router(); 

router.post("/validate-password", validatePassword); 