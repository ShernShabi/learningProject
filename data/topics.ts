export interface TopicNode {
  id: number;
  label: string;
  x: number;
  y: number;
  anim: 1 | 2 | 3;
  color: "emerald" | "sky" | "amber" | "violet";
}

export const TOPICS: TopicNode[] = [
  { id: 0, label: "Plumbing basics", x: 10, y: 12, anim: 1, color: "emerald" },
  { id: 1, label: "Makeup essentials", x: 30, y: 18, anim: 2, color: "violet" },
  { id: 2, label: "Art history", x: 60, y: 15, anim: 3, color: "amber" },
  {
    id: 3,
    label: "Street photography",
    x: 18,
    y: 30,
    anim: 2,
    color: "sky",
  },
  {
    id: 4,
    label: "Woodworking joints",
    x: 80,
    y: 22,
    anim: 1,
    color: "emerald",
  },
  { id: 5, label: "Excel formulas", x: 8, y: 45, anim: 3, color: "amber" },
  {
    id: 6,
    label: "Sourdough baking",
    x: 40,
    y: 35,
    anim: 1,
    color: "violet",
  },
  { id: 7, label: "Music theory", x: 72, y: 38, anim: 2, color: "sky" },
  {
    id: 8,
    label: "Car maintenance",
    x: 22,
    y: 55,
    anim: 1,
    color: "emerald",
  },
  {
    id: 9,
    label: "Networking fundamentals",
    x: 62,
    y: 52,
    anim: 3,
    color: "sky",
  },
  { id: 10, label: "Yoga flows", x: 12, y: 68, anim: 2, color: "violet" },
  {
    id: 11,
    label: "Gardening 101",
    x: 42,
    y: 64,
    anim: 1,
    color: "emerald",
  },
  {
    id: 12,
    label: "Coffee brewing",
    x: 75,
    y: 68,
    anim: 2,
    color: "amber",
  },
  {
    id: 13,
    label: "Public speaking",
    x: 28,
    y: 80,
    anim: 3,
    color: "sky",
  },
  {
    id: 14,
    label: "Budgeting basics",
    x: 55,
    y: 82,
    anim: 1,
    color: "emerald",
  },
  { id: 15, label: "SQL queries", x: 90, y: 12, anim: 2, color: "violet" },
];

export const TOPIC_EDGES: [number, number][] = [
  [0, 5],
  [0, 6],
  [1, 6],
  [1, 2],
  [2, 7],
  [3, 6],
  [3, 8],
  [4, 7],
  [5, 8],
  [6, 11],
  [7, 9],
  [8, 11],
  [9, 12],
  [10, 11],
  [11, 13],
  [12, 14],
  [2, 15],
  [9, 15],
];

