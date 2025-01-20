import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';


const protectRoute = async (req, res, next) => {

try {
     const token =  req.cookies.jwt;
     if(!token) {
         return res.status(401).json({error: "Unauthorized access"});
     }
       
     const verifyToken = jwt.verify(token, process.env.JWT_SECRET);

     if(!verifyToken) {
         return res.status(401).json({error: "Unauthorized access"});
     }

     const user = await User.findById(verifyToken.userId)
     .select("-password");

        if(!user) {
            return res.status(404).json({error: "user not found"});
        }

        req.userId = user;
        next();

    } catch (error) {
    console.log("protect route error", error);
    res.status(500).json({ error: "Internal server error" });
    
}

}

export default protectRoute;