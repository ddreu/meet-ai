"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { stats as statsData, recentMeetings } from "@/constants";
import { Users, Video, FileText, DollarSign } from "lucide-react";
import { GeneratedAvatar } from "@/components/generated-avatar";

// Session types
interface User {
  id: string;
  name: string;
  email: string;
  image?: string | null;
}

interface Session {
  session: {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    userId: string;
    expiresAt: Date;
    token: string;
    ipAddress?: string | null;
    userAgent?: string | null;
  };
  user: User;
}
// Props for HomeView
interface Props {
  session: Session;
}

// Map icon names to React components
const iconMap: Record<string, React.ReactNode> = {
  Users: <Users className="w-6 h-6 text-blue-500" />,
  Video: <Video className="w-6 h-6 text-green-500" />,
  FileText: <FileText className="w-6 h-6 text-purple-500" />,
  DollarSign: <DollarSign className="w-6 h-6 text-yellow-500" />,
};

// HomeView component
export const HomeView = ({ session }: Props) => {
  const router = useRouter();

  return (
    <div className="flex flex-col p-6 gap-6">
      {/* Welcome Section */}
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold text-gray-900">
          Welcome back, {session.user.name} 👋
        </h1>
        <p className="text-gray-500">
          Here's a quick overview of your AI workspace.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {statsData.map((stat) => (
          <Card
            key={stat.title}
            className="flex flex-col items-center justify-center text-center p-4 hover:shadow-lg transition cursor-pointer"
          >
            <div>{iconMap[stat.iconName]}</div>
            <div className="flex flex-col items-center gap-y-2">
              <p className="text-gray-500 text-sm">{stat.title}</p>
              <p className="text-2xl font-semibold text-gray-900">
                {stat.value}
              </p>
            </div>
          </Card>
        ))}
      </div>
      <Card>
        <CardHeader className="flex justify-between items-center">
          <CardTitle>Recent Meetings</CardTitle>
          <Button onClick={() => router.push("/meetings")}>View All</Button>
        </CardHeader>
        <CardContent className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentMeetings.map((meeting) => (
                <TableRow
                  key={meeting.id}
                  className="cursor-pointer hover:bg-gray-50"
                  onClick={() => router.push(`/meetings/${meeting.id}`)}
                >
                  {/* Avatar + Name */}
                  <TableCell>
                    <div className="flex items-center gap-x-2">
                      <GeneratedAvatar
                        variant="botttsNeutral"
                        seed={meeting.name} // use name as seed for consistent avatar
                        className="w-6 h-6"
                      />
                      <span className="font-semibold capitalize">
                        {meeting.name}
                      </span>
                    </div>
                  </TableCell>

                  {/* Date */}
                  <TableCell>{meeting.date}</TableCell>

                  {/* Status */}
                  <TableCell>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        meeting.status === "Completed"
                          ? "bg-green-100 text-green-800"
                          : meeting.status === "In Progress"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {meeting.status}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Billing Summary */}
      <Card>
        <CardHeader>
          <CardTitle>Billing Summary</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <p className="text-gray-500">Current plan: Free Plan</p>
          <p className="text-gray-500">Next billing date: N/A</p>
          <Button
            className="self-start"
            onClick={() => router.push("/billing")}
          >
            Upgrade to Pro
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
