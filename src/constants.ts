// src/constants.ts
export const DEFAULT_PAGE = 1;
export const DEFAULT_PAGE_SIZE = 10;
export const MAX_PAGE_SIZE = 100;
export const MIN_PAGE_SIZE = 1;

// Dashboard stats data
export const stats = [
  { title: "Total AIs", value: 12, iconName: "Users" },
  { title: "Active Meetings", value: 8, iconName: "Video" },
  { title: "Reports Generated", value: 24, iconName: "FileText" },
  { title: "Revenue", value: "$120", iconName: "DollarSign" },
];

export const recentMeetings = [
  { id: "1", name: "AI Trainer John", date: "2025-09-20", status: "Completed" },
  {
    id: "2",
    name: "AI Trainer Sarah",
    date: "2025-09-21",
    status: "In Progress",
  },
  { id: "3", name: "AI Trainer Mike", date: "2025-09-22", status: "Completed" },
];
