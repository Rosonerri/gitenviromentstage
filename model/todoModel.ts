import mongoose, { Document, Schema } from "mongoose";
import { model } from "mongoose";

interface iTask {
  taskName: string;
  description?: string;
  isCompleted?: boolean;
}

interface iTaskData extends iTask, Document {}

const TaskModel = new Schema<iTaskData>(
  {
    taskName: {
      type: String,
    },
    description: {
      type: String,
    },
    isCompleted: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

export default model<iTaskData>("tasks", TaskModel);
