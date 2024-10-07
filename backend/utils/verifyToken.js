import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
    const token = req.cookies.accessToken;
    if (!token) {
        return res.status(401).json({success:false,message:"You are not authenticated"});
    }
    //if token exist then verify
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
        if (err) {
            return res.status(401).json({success:false,message:"token is invalid"});
        }
        req.user = user;
        next();
    })
}
export const verifyUser = (req, res, next) => {
    verifyToken(req, res, next, () => {
        if (req.user.id === req.params.id || req.user.role === 'admin') {
            next();
        } else {
            return res.status(403).json({success:false,message:"You are not authorized"});
        }
    })
}
export const verifyAdmin = (req, res, next) => {
    verifyToken(req, res, next, () => {
        if (req.user.role === 'admin') {
            next();
        } else {
            return res.status(403).json({success:false,message:"You are not authorized"});
        }
    })
}

// export const protectRoute = (req, res, next) => {
//     verifyToken(req, res, () => {
//         if (req.user.id === req.params.id || req.user.role === 'admin') {
//             next();
//         } else {
//             return res.status(403).json({success:false,message:"You are not authorized"});
//         }
//     })
// }

// export const generateToken = (user) => {
//     return jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });
// }
// export const verifyTokenAndAuthorization = (req, res, next) => {
//     verifyToken(req, res, () => {
//         if (req.user.id === req.params.id || req.user.role === 'admin') {
//             next();
//         } else {
//             return res.status(403).json("You are not authorized");
//         }
//     })
// }

// export const protectRouteWithToken = (req, res, next) => {
//     verifyToken(req, res, () => {
//         next();
//     })
// }
