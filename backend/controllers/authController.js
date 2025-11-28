
import User from "../models/user";
import bcrypt from "bcryptjs"
import jwt from 'jsonwebtoken';


async function signupUser(req, res) {
    try {
        // 1 - extract the user info
        let { name, email, password } = req.body;

        // 2 - validate all the data 
        if (!name || !email || !password) {
            return res.status(400).json({ msg: "All fields are required" });
        }

        // 3 - check existing user
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ msg: "User already exists!" });
        }

        // 4- hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // 5- create and save user to db
        const user = await User.create({
            name,
            email,
            password: hashedPassword
        });

        // 6- create the jwt token
        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        )
        // 7 - send response(token) to frontend
        res.status(201).json({
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            }
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Server Error !!" });
    }
}
