import ActivityItem from "./ActivityItem";
import { getActivities, removeActivity } from "@/actions/activities.actions";

export default async function ActivityFeed() {
    const activities = await getActivities()

  return (
    <section>
      <ul className="flex flex-col gap-10 p-10">
        {activities.map((activity) => (
          <ActivityItem key={activity.id} activity={activity} removeActivity={removeActivity}/>
        ))}
      </ul>
    </section>
  );
}
