import { Session } from "../../types/session";
import { formatTimeRange } from "../../lib/formatTime";
import styles from "../../styles/shared/Card.module.css";

export default function SessionInfo({
  session,
  showTitle,
}: {
  session: Session;
  showTitle: boolean;
}) {
  return (
    <>
      {showTitle && <h3 className={styles.sessionTitle}>{session.title}</h3>}
      <p className={styles.field}>
        <strong>Speaker:</strong> {session.speaker}
      </p>
      <p className={styles.field}>
        <strong>Track:</strong> {session.track}
      </p>
      <p className={styles.field}>
        <strong>Time:</strong>{" "}
        {formatTimeRange(session.startTime, session.endTime)}
      </p>
      <p className={styles.field}>
        <strong>Room:</strong> {session.room}
      </p>
    </>
  );
}
