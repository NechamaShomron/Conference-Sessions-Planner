"use client";
import { useState } from "react";
import SessionsList from "../components/sessions/SessionsList";
import SearchFilters from "../components/sessions/SearchFilters";
import { getSessions } from "../lib/sessions";
import { Session, Track } from "../types/session";
import { isInTimeRange, timeRanges } from "../lib/formatTime";
import styles from "../styles/shared/CardList.module.css";

export default function Home() {
  const sessions = getSessions();
  const [filters, setFilters] = useState({
    track: "" as Track | "",
    time: "",
    search: "",
  });

  const filteredSessions: Session[] = sessions.filter((session) => {
    const matchesTrack = !filters.track || session.track === filters.track;

    const matchesTime =
      !filters.time ||
      isInTimeRange(
        session.startTime,
        session.endTime,
        filters.time as keyof typeof timeRanges
      );

    const matchesSearch =
      !filters.search ||
      session.title.toLowerCase().includes(filters.search.toLowerCase()) ||
      session.speaker.toLowerCase().includes(filters.search.toLowerCase());

    return matchesTrack && matchesTime && matchesSearch;
  });

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Conference Sessions</h1>
      <SearchFilters tracks={Object.values(Track)} onChange={setFilters} />
      <SessionsList sessions={filteredSessions} />
    </div>
  );
}
