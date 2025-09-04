import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://devraj:devraj456@cluster0.23ixwih.mongodb.net/food-delivery"
    )
    .then(() => console.log("DB Connected"));
};
