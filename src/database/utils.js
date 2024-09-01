import mongoose from "mongoose"

export const connectDb = async () => {
    //code to connect to database
    return await mongoose.connect("mongodb://localhost:27017/school")
        .then(() => {
            console.log("Connected to database")
        })
        .catch((err) => {
            console.log("Error connecting to database", err)
        })

}