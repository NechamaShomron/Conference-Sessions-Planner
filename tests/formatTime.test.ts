import { formatTimeRange } from "../lib/formatTime";
import { getSessions } from "../lib/sessions";
import "@testing-library/jest-dom";

describe("formatTimeRange", () => {
  it("formats date and time correctly", () => {
    const sessions = getSessions();
    const session = sessions[0];
    const start = session.startTime;
    const end = session.endTime;

    const formatted = formatTimeRange(start, end);
    expect(formatted).toMatch("20 May 2025 | 11:00 - 11:45");
  });
});
