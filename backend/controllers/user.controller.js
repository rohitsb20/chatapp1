import User from "../models/user.model.js";
export const getSidebarUsers = async (req, res) => {
    try {
        
        const loggedUserID = req.user._id;

        const filterUsers = await User.find({ _id: { $ne: loggedUserID } });
res.status(200).json(filterUsers);

    } catch (error) {
        console.log("Error in getSidebarUsers controller: ", error.message);
        res.status(500).json({ error: "Internal server error" });
        
    }
}
    