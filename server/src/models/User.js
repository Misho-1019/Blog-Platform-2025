import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        minLength: 2,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /\@[a-zA-Z]+.[a-zA-Z]+$/,
        lowercase: true,
        minLength: 10,
    },
    password: {
        type: String,
        match: /^\w+$/,
        minLength: 6,
        trim: true,
    },
})

userSchema.pre('save', async function () {
    this.password = await bcrypt.hash(this.password, 10)
})

const User = model('User', userSchema)

export default User;