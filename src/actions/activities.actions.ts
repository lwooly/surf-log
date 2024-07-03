"use server"
import prisma from "@/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const getActivities = async () => {
    return await prisma.activity.findMany();
}

export const createActivity = async (data: FormData) => {
  
    try {
      const location = data.get("location")?.valueOf();
  
      if (typeof location !== "string" || location.length === 0) {
        throw new Error("Invalid Location");
      }
  
      const durationString = data.get("duration")?.valueOf();
  
      if (
        !durationString ||
        typeof durationString !== "string" ||
        isNaN(Number(durationString))
      ) {
        throw new Error("Invalid Duration");
      }
  
      const duration = parseInt(durationString, 10);
  
      if (duration <= 0) {
        throw new Error("Invalid Duration");
      }
  
      const activity = await prisma.activity.create({
        data: { location, duration },
      });
    } catch (error) {
      // TODO:  show error to user
      console.log(error);
    }
  
    // redirect to homepage
    redirect("/");
  }

export const removeActivity = async (id:number) => {
    await prisma.activity.delete({
        where: {
          id: id,
        },
      })

      revalidatePath('/')
}

