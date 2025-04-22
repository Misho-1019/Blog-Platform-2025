import { Router } from "express";
import authService from "../services/auth-service.js";

const authController = Router();

authController.post('/register', async (req, res) => {
    const authData = req.body;

    try {
        const result = await authService.register(authData)
        res.cookie('auth', result.token, { httpOnly: true })

        res.status(201).json(result);
    } catch (err) {
        res.status(401).json({ message: err.message }).end()
    }
})

authController.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const result = await authService.login(email, password)

        res.cookie('auth', result.token, { httpOnly: true })

        res.status(201).json(result)      
    } catch (error) {
        console.log(error.message);
        res.status(401).json({ message: error.message }).end()
    }
})

authController.get('/logout', (req, res) => {
    try {
        res.clearCookie('auth')
        res.status(200).json({ message: 'Logout successfully!' })       
    } catch (error) {
        console.log(error.message);
        res.status(403).json({ message: error.message })
    }
})

export default authController;