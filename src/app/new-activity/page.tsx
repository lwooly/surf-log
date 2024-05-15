import UserInfo from "@/components/pages/home/UserInfo";
import NewActivityForm from "@/components/pages/newActivity/NewActivityForm";

export default function newActivityPage() {
  return (
    <div>
      <h1>Create New Activity</h1>
      <UserInfo />
      <NewActivityForm />
    </div>
  );
}
