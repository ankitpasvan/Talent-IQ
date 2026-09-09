import { chatClient, upsertStreamUser } from "../lib/stream.js";

export async function getStreamToken(req, res) {
  try {
    const clerkId = req.user.clerkId;
    const userName = req.user.name || "Anonymous";
    const userImage = req.user.profileImage || req.user.image || "";

    // Ensure user exists in Stream chat
    await upsertStreamUser({
      id: clerkId,
      name: userName,
      image: userImage,
    });

    const token = chatClient.createToken(clerkId);

    res.status(200).json({
      token,
      userId: clerkId,
      userName,
      userImage,
    });
  } catch (error) {
    console.log("Error in getStreamToken controller:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
