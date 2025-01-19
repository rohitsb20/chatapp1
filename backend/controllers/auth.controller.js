

export const signup = async (req, res) => {
    try {
        
        
    } catch (error) {
        console.log("signup auth controller error",error);
        res.status(500).json({error: "Internal server error"});
        
    }
}