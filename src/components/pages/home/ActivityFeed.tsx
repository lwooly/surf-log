import prisma from "@/db";
import ActivityItem from "./ActivityItem";

const getActivities = async () => {
    return await prisma.activity.findMany();
}

const removeActivity = async (id:number) => {
    "use server"
    await prisma.activity.delete({
        where: {
          id: id,
        },
      })
}

export default async function ActivityFeed() {
    const activities = await getActivities()


  return (
    <section>
      <ul>
        {activities.map((activity) => (
          <ActivityItem key={activity.id} activity={activity} removeActivity={removeActivity}/>
        ))}
      </ul>
    </section>
  );
}
