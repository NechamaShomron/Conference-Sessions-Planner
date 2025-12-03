import { render, screen, fireEvent } from "@testing-library/react";
import SessionsPage from "../components/session/SessionsList"; // adjust the path if needed
import "@testing-library/jest-dom";

test("search filters sessions by title", () => {
  render(<SessionsPage />);

  const input = screen.getByPlaceholderText("Search by title or speaker");
  fireEvent.change(input, { target: { value: "React" } });
  expect(screen.getByText("Modern React Patterns")).toBeInTheDocument();
  expect(screen.queryByText("TypeScript Deep Dive")).toBeNull();
});
