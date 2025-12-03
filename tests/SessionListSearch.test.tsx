import { render, screen } from "@testing-library/react";
import SessionsList from "../components/sessions/SessionsList";
import { getSessions } from "../lib/sessions";
import "@testing-library/jest-dom";

test("search filters sessions by title", () => {
  const sessions = getSessions();

  const filtered = sessions.filter((s) =>
    s.title.toLowerCase().includes("react".toLowerCase())
  );

  render(<SessionsList sessions={filtered} />);

  expect(screen.getByText("Modern React Patterns")).toBeInTheDocument();
  expect(screen.queryByText("TypeScript Deep Dive")).toBeNull();
});
