import ActivityFeed from "@/components/pages/home/ActivityFeed";
import UserInfo from "@/components/pages/home/UserInfo";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Activity Feed</h1>
      <ActivityFeed />
      <UserInfo />
      <Link 
      href="/new-activity"
      className="border border-slate-300 px-1 py-1 rounded hover:bg-slate-500"
      >
        Record Activity
      </Link>
    </>
  );
}
