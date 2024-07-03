import UserInfo from "@/components/pages/home/UserInfo";
import NewActivityForm from "@/components/pages/newActivity/NewActivityForm";
import prisma from "@/db";
import { redirect } from "next/navigation";

async function createActivity(data: FormData) {
  "use server";

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

export default function newActivityPage() {
  return (
    <div>
      <h1>Create New Activity</h1>
      <UserInfo />
      <NewActivityForm createActivity={createActivity} />
    </div>
  );
}
