import { Request, Response } from "express";
import todoModel from "../model/todoModel";

export const createTask = async (req: Request, res: Response) => {
  try {
    const { taskName, description } = req.body;

    const create = await todoModel.create({ taskName, description });

    return res.status(201).json({
      message: "Todo created succesfully",
      data: create,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Error creating task",
    });
  }
};
export const viewTask = async (req: Request, res: Response) => {
  try {
    const create = await todoModel.find();

    return res.status(201).json({
      message: "Todo view successfully",
      data: create,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Error viewing task",
    });
  }
};
