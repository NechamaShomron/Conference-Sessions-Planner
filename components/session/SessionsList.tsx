"use client";

import { useState } from "react";
import SessionInfo from "../shared/SessionInfo";
import { getSessions } from "../../lib/sessions";
import { timeRanges, isInTimeRange } from "../../lib/formatTime";
import Link from "next/link";
import styles from "../../styles/shared/CardList.module.css";
import cardStyles from "../../styles/shared/Card.module.css";

export default function SessionsList() {
  const allSessions = getSessions();
  const [trackFilter, setTrackFilter] = useState<string>("");
  const [timeFilter, setTimeFilter] = useState<keyof typeof timeRanges | "">(
    ""
  );
  const [searchTerm, setSearchTerm] = useState<string>("");

  const tracks = Array.from(new Set(allSessions.map((s) => s.track)));

  const filteredSessions = allSessions.filter((session) => {
    const matchesTrack = !trackFilter || session.track === trackFilter;
    const matchesTime =
      !timeFilter ||
      isInTimeRange(session.startTime, session.endTime, timeFilter);
    const matchesSearch =
      !searchTerm ||
      session.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      session.speaker.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesTrack && matchesTime && matchesSearch;
  });

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Conference Sessions</h1>
      <div className={styles.filters}>
        <select
          value={trackFilter}
          onChange={(e) => setTrackFilter(e.target.value)}
        >
          <option value="">Filter by Track</option>
          {tracks.map((track) => (
            <option key={track} value={track}>
              {track}
            </option>
          ))}
        </select>

        <select
          value={timeFilter}
          onChange={(e) =>
            setTimeFilter(e.target.value as keyof typeof timeRanges)
          }
        >
          <option value="">Filter by Time</option>
          {Object.keys(timeRanges).map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Search by title or speaker"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className={styles.sessionList}>
        {filteredSessions.length ? (
          filteredSessions.map((session) => (
            <div key={session.id} className={styles.sessionItem}>
              <Link
                href={`/sessions/${session.id}`}
                className={cardStyles.cardLink}
              >
                <div className={cardStyles.card}>
                  <SessionInfo session={session} showTitle={true} />
                </div>
              </Link>
            </div>
          ))
        ) : (
          <p>No sessions match your search.</p>
        )}
      </div>
    </div>
  );
}
