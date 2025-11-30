import jwt from 'jsonwebtoken';

// middleware to check the user is authenticated or not!!

function protect(req, res, next) {
    // 1 - extract the token from the request
    const authHeader = req.headers['authorization'];

    //2-  check token existence 
    if (!authHeader) {
        res.status(401).json({ msg: "Auth Token is missing" })
    }

    //3 -  format the token 
    const parts = authHeader.split(' ');
    if (parts.length !== 2 || parts[0] !== 'Bearer') {
        return res.status(401).json({ error: "Invalid Authorization format" });
    }
    const token = parts[1];


    try {
        // 4. Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'yourSecretKey');

        // 5. Extract user id and attach to req.user
        req.user = { id: decoded.id };

        // 6. next() to run next route/middleware
        next();
    } catch (err) {
        return res.status(403).json({ error: "Invalid or expired token" });
    }

}

export default protect;