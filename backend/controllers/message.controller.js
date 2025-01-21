

export const sendMessage = async (req, res) => {
    try {
        const {message}  = req.body;
        const {id : receiverId} = req.params;
        const senderId = req.user.id;


    } catch (error) {
        console.log("error in send Message Controller");
        
        res.status(500).json({ error : "internal server error" });
    }
}