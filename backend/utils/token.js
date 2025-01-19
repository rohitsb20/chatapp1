import jwt from 'jsonwebtoken';

 const generateToken = ({res, userId}) => {
    const token = jwt.sign({userId}, process.env.JWT_SECRET,
         {expiresIn: '7d'});
         res.cookie('access_token', token, {
             httpOnly: true,
             sameSite: true,
             maxAge: 7*24*60*60*1000
         }

         );
}

export default generateToken;