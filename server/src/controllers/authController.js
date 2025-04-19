import { Router } from "express";
import authService from "../services/auth-service.js";

const authController = Router();

authController.post('/register', async (req, res) => {
    const authData = req.body;

    try {
        const token = await authService.register(authData)
        res.cookie('auth', token, { httpOnly: true })

        res.status(201).json({ token });
    } catch (err) {
        res.status(401).json({ message: err.message }).end()
    }
})

authController.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const token = await authService.login(email, password)

        res.cookie('auth', token, { httpOnly: true })

        res.status(201).json({ token })
    } catch (error) {
        console.log(error.message);
        res.status(401).json({ message: error.message }).end()
    }
})

authController.get('/logout', (req, res) => {
    res.clearCookie('auth')
    res.status(200).json({ message: 'Logout successfully!' })
})

export default authController;