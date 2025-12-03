export function formatTimeRange(start: string, end: string) {
  const startDate = new Date(start);
  const endDate = new Date(end);

  const date = startDate.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  const startTime = startDate.toTimeString().slice(0, 5);
  const endTime = endDate.toTimeString().slice(0, 5);

  return `${date} | ${startTime} - ${endTime}`;
}

export const timeRanges = {
  Morning: { start: 6, end: 12 },
  Afternoon: { start: 12, end: 18 },
  Evening: { start: 18, end: 24 },
};

export function isInTimeRange(
  startTime: string,
  endTime: string,
  rangeKey: keyof typeof timeRanges
): boolean {
  const sessionStart = new Date(startTime).getHours();
  const sessionEnd = new Date(endTime).getHours();
  const range = timeRanges[rangeKey];
  return sessionEnd > range.start && sessionStart < range.end;
}

export function timesOverlap(
  a: { startTime: string; endTime: string },
  b: { startTime: string; endTime: string }
) {
  const startA = new Date(a.startTime).getTime();
  const endA = new Date(a.endTime).getTime();
  const startB = new Date(b.startTime).getTime();
  const endB = new Date(b.endTime).getTime();

  return startA < endB && startB < endA;
}
