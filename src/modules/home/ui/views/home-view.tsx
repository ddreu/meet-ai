"use client";

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export const HomeView = () => {
  const router = useRouter();
  const { data: session } = authClient.useSession();

  // if (!session) {
  //   return <p>Loading...</p>;
  // }

  if (!session) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-gray-500 text-sm">Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col p-4 gap-y-4">
      <p className="text-gray-900 text-lg font-medium">
        Hello,{" "}
        <span className="font-semibold text-gray-700">{session.user.name}</span>
      </p>
      <p className="text-gray-500 text-sm">Welcome back to your dashboard.</p>
    </div>
  );

  // return (
  //   <div className="flex flex-col p-4 gap-y-4">
  //     <p>Logged in as {session.user.name}</p>
  //     <Button
  //       onClick={() =>
  //         authClient.signOut({
  //           fetchOptions: {
  //             onSuccess: () => router.push("/sign-in"),
  //           },
  //         })
  //       }
  //     >
  //       Sign Out
  //     </Button>
  //   </div>
  // );
};
