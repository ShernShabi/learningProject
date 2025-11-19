"use client";

import { useMemo } from "react";
import { TOPICS, TOPIC_EDGES, TopicNode } from "@/data/topics";

interface TopicBackgroundProps {
  query: string;
}

const colorClassMap: Record<TopicNode["color"], string> = {
  emerald: "text-emerald-400",
  sky: "text-sky-400",
  amber: "text-amber-400",
  violet: "text-violet-400",
};

const animClassMap: Record<TopicNode["anim"], string> = {
  1: "animate-float1",
  2: "animate-float2",
  3: "animate-float3",
};

export function TopicBackground({ query }: TopicBackgroundProps) {
  const normalized = query.trim().toLowerCase();

  const nodes = useMemo(
    () =>
      TOPICS.map((topic) => ({
        ...topic,
        matches:
          normalized.length === 0 ||
          topic.label.toLowerCase().includes(normalized),
      })),
    [normalized]
  );

  const topicById = useMemo(() => {
    const map = new Map<number, TopicNode>();
    nodes.forEach((node) => {
      map.set(node.id, node);
    });
    return map;
  }, [nodes]);

  return (
    <div className="pointer-events-none absolute inset-0 z-0">
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {TOPIC_EDGES.map(([a, b], index) => {
          const from = topicById.get(a);
          const to = topicById.get(b);

          if (!from || !to) {
            return null;
          }

          return (
            <line
              key={`${a}-${b}-${index}`}
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
              stroke="rgba(148, 163, 184, 0.35)"
              strokeWidth="0.12"
            />
          );
        })}
      </svg>

      {nodes.map((topic) => (
        <span
          key={topic.id}
          className={[
            "absolute text-[10px] font-medium transition-opacity duration-500 sm:text-xs",
            colorClassMap[topic.color],
            animClassMap[topic.anim],
            topic.matches ? "opacity-80" : "opacity-15",
          ].join(" ")}
          style={{
            top: `${topic.y}%`,
            left: `${topic.x}%`,
          }}
        >
          {topic.label}
        </span>
      ))}
    </div>
  );
}

