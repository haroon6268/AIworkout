import mongoose from "mongoose";
const { Schema } = mongoose;

const workoutSchema = new Schema({
  name: String,
  workout: Object,
});

const WorkoutModel =
  mongoose.models.Workout || mongoose.model("Workout", workoutSchema);
export default WorkoutModel;
