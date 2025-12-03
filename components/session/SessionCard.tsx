import Link from "next/link";
import { Session } from "../../types/session";
import { formatTimeRange } from "../../lib/formatTime";
import styles from "../../styles/shared/Card.module.css";

export default function SessionCard({ session }: { session: Session }) {
  return (
    <Link href={`/sessions/${session.id}`} className={styles.cardLink}>
      <div className={styles.card}>
        <div className={styles.header}>
          <h3>{session.title}</h3>
          <p>
            {session.speaker} | {session.track}
          </p>
        </div>
        <div className={styles.timeRoom}>
          <span>{session.room}</span>
          <span>{formatTimeRange(session.startTime, session.endTime)}</span>
        </div>
      </div>
    </Link>
  );
}
