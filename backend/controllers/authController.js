
import User from "../models/user.js";
import bcrypt from "bcryptjs"
import jwt from 'jsonwebtoken';

// SignUp fuction to perform the register of the user and new login 
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
        const hashedPassword = await bcrypt.hash(password, 10); // 10 is salt here

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

// Login function for the already registered user
async function loginUser(req, res) {
    try {
        // 1 - extract the user data 
        let { email, password} = req.body;

        // 2 - validate the user data 
        if (!email || ! password) {
            res.status(400).json({ msg: "All data is required for login" });
        }

        // 3 - find the user by his email
        const findUser = await User.findOne({ email });

        // 4 - compare entered and saved Passwords ( both are hashed )
        const savedPassword = findUser.password;
        const match = await bcrypt.compare(password, savedPassword); // comparison of Passwords
        if (match) {

            //    5-create the token 
            const token = jwt.sign(
                { id: findUser._id },
                process.env.JWT_SECRET,
                { expiresIn: "7d" }
            )
            // 6 - send the response to the frontend
            res.status(201).json({
                token,
                user: {
                    id: findUser._id,
                    name: findUser.name,
                    email: findUser.email
                }
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Server error : User not exist" });
    }


}


export { signupUser, loginUser };

