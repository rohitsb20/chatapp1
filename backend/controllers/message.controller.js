


export const messages = async (req, res) => {

    try {
        
        const {message} = req.body;
        const {id} = req.params; 
        const senderId = req.userId;

    } catch (error) {
        console.log("message controller error", error);
        res.status(500).json({ error: "Internal server error" });
        
    }

}
