import { getSessionById } from "../../../lib/sessions";
import { formatTimeRange } from "../../../lib/formatTime";
import AgendaButton from "../../../components/agenda/AgendaButton";
import styles from "../../../styles/SessionDetails.module.css";

export default async function SessionDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const session = getSessionById(id);

  if (!session) return <p>Session not found.</p>;

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>{session.title}</h1>
        <AgendaButton sessionId={id} />
      </div>
      <p className={styles.field}>
        <strong>Speaker:</strong> {session.speaker}
      </p>
      <p className={styles.field}>
        <strong>Track:</strong> {session.track}
      </p>
      <p className={styles.field}>
        <strong>Description:</strong> {session.description}
      </p>
      <p className={styles.field}>
        <strong>Room:</strong> {session.room}
      </p>
      <p className={styles.field}>
        <strong>Time:</strong>{" "}
        {formatTimeRange(session.startTime, session.endTime)}
      </p>
    </div>
  );
}
