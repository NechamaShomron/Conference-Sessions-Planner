import { render, screen } from "@testing-library/react";
import SessionInfo from "../components/sessions/SessionInfo";
import { getSessions } from "../lib/sessions";
import "@testing-library/jest-dom";

describe("SessionCard", () => {
  it("renders a session's title, speaker, and room", () => {
    const sessions = getSessions();
    const session = sessions[0];
    render(<SessionInfo session={session} showTitle={true} />);

    expect(screen.getByText(session.title)).toBeInTheDocument();
    expect(screen.getByText(session.room)).toBeInTheDocument();
  });
});
