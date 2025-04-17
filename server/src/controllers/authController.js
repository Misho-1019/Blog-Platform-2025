import { Router } from "express";
import authService from "../services/auth-service.js";

const authController = Router();

authController.post('/register', async (req, res) => {
    const authData = req.body;

    await authService.register(authData)
    
    res.end();
})

authController.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const token = await authService.login(email, password)
        
        res.cookie('auth', token, { httpOnly: true })
        
    } catch (error) {
        console.log(error.message);
        //throw 404 error
    }
})

export default authController;