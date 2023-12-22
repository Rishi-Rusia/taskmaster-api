import mongoose from "mongoose";

const userSchema= new mongoose.Schema(
    {
        googleId: {
            type: String,
            required: true,
          },
          displayName: {
            type: String,
          },
          email: {
            type: String,
          },
          image: {
            type: String,
         
          },
          tasks: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Task',
            default:[],
          }],
    }
);

export default mongoose.model("users", userSchema);