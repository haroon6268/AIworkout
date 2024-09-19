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
  const content = `Please create me a workout plan. Here are the requirments: Days per Week: ${daysPerWeek}, Goals:${goals}  `;
  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content:
          "You are a personal trainer who specializes in creating workout plans. I want you to make the output JSX, don't include newline chars, and include everything within just 1 div. Im using tailwindcss.",
      },
      {
        role: "user",
        content: content,
      },
    ],
  });
  console.log(completion.choices[0].message);
  const workoutDoc = new WorkoutModel({
    name: name,
    workout: completion.choices[0].message.content,
  });
  const data2 = await workoutDoc.save();
  console.log(data2);

  return NextResponse.json({ status: 200, data: { id: data2._id.toString() } });
}
