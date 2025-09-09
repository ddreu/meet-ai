import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import { HomeView } from "@/modules/home/ui/views/home-view";
import { redirect } from "next/navigation";
import { caller } from "@/trpc/server";

const page = async () => {
  const data = await caller.hello({ text: "Andrew Server" });

  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session) {
    redirect("/sign-in");
  }

  return <p>{data.greeting}</p>;

  return <HomeView />;
};

export default page;
