"use client";

import { useState } from "react";
import { timeRanges } from "../../lib/formatTime";
import { Track } from "../../types/session";
import styles from "../../styles/shared/CardList.module.css";

export default function SearchFilters({
  tracks,
  onChange,
}: {
  tracks: string[];
  onChange: (filters: {
    track: Track | "";
    time: string;
    search: string;
  }) => void;
}) {
  const [trackFilter, setTrackFilter] = useState("");
  const [timeFilter, setTimeFilter] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  function updateFilters(newState: any) {
    const state = {
      track: newState.track ?? trackFilter,
      time: newState.time ?? timeFilter,
      search: newState.search ?? searchTerm,
    };
    onChange(state);
  }

  return (
    <div className={styles.filters}>
      <select
        value={trackFilter}
        onChange={(e) => {
          setTrackFilter(e.target.value);
          updateFilters({ track: e.target.value });
        }}
      >
        <option value="">Filter by Track</option>
        {tracks.map((t) => (
          <option key={t} value={t}>
            {t}
          </option>
        ))}
      </select>
      <select
        value={timeFilter}
        onChange={(e) => {
          setTimeFilter(e.target.value);
          updateFilters({ time: e.target.value });
        }}
      >
        <option value="">Filter by Time</option>
        {Object.keys(timeRanges).map((t) => (
          <option key={t} value={t}>
            {t}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Search by title or speaker"
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          updateFilters({ search: e.target.value });
        }}
      />
    </div>
  );
}
