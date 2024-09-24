import { NextResponse } from "next/server";
import OpenAI from "openai";
import { dbConnect } from "../lib/db";
import WorkoutModel from "../models/workout";
import mongoose from "mongoose";

export async function GET(req) {
  await dbConnect();
  const id = req.nextUrl.searchParams.get("id");
  const isValid = mongoose.Types.ObjectId.isValid(id);
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return NextResponse.json({ status: 400, message: "Invalid request" });
  }
  const model = await WorkoutModel.findById(id);
  console.log(model._id.toString());
  return NextResponse.json({
    status: 200,
    data: { name: model.name, workout: model.workout },
  });
}

export async function POST(req) {
  const data = await req.json(req.body);
  const openai = new OpenAI();
  await dbConnect();
  const { daysPerWeek, fitnessGoals, name } = data;
  let goals = "";
  if (fitnessGoals?.muscleGain) {
    goals += "Muscle Gain, ";
  }
  if (fitnessGoals?.fatLoss) {
    goals += "Fat Loss, ";
  }
  if (fitnessGoals?.endurance) {
    goals += "Endurance, ";
  }
  if (fitnessGoals?.strengthGain) {
    goals += "Strength Gain, ";
  }
  const content = `
Create a workout plan in JSON format based on the following details:
- Days per Week: ${daysPerWeek}
- Goals: ${goals}

Please structure the output as follows:
{
  "data": [
    {"day": "day_of_week" 
     "exercises": [
        {
          "name": "exercise_name",
          "sets": number_of_sets,
          "reps": number_of_reps,
          "rest": rest_time_between_sets
        }
      }]
    },
  ]
}
I want you to ONLY output the JSON Object. I am parsing this serverside so it must only be JSON. Make sure that the days are in a form of an array.
`;
  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content:
          "You are a personal trainer who specializes in creating workout plans.",
      },
      {
        role: "user",
        content: content,
      },
    ],
  });
  console.log(completion.choices[0].message.content);
  let parsed;
  try {
    parsed = await JSON.parse(completion.choices[0].message.content);
  } catch {
    return NextResponse.json({ status: 500, message: "Something went Wrong!" });
  }
  const workoutDoc = new WorkoutModel({
    name: name,
    workout: parsed,
  });
  const data2 = await workoutDoc.save();

  return NextResponse.json({ status: 200, data: { id: data2._id.toString() } });
}
