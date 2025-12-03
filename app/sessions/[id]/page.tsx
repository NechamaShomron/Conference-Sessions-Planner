import { getSessionById } from "../../../lib/sessions";
import AgendaButton from "../../../components/agenda/AgendaButton";
import SessionInfo from "../../../components/shared/SessionInfo";
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
      <SessionInfo session={session} showTitle={false} />
      <p className={styles.field}>
        <strong>Description:</strong> {session.description}
      </p>
    </div>
  );
}
