"use client";

import Link from "next/link";
import SessionInfo from "./SessionInfo";
import { Session } from "../../types/session";
import styles from "../../styles/shared/Card.module.css";

export default function SessionItem({
  session,
  showConflict,
}: {
  session: Session;
  showConflict?: boolean;
}) {
  return (
    <Link href={`/sessions/${session.id}`} className={styles.cardLink}>
      <div className={`${styles.card} ${showConflict ? styles.conflict : ""}`}>
        <SessionInfo session={session} showTitle={true} />
        {showConflict && <p className={styles.warning}>⚠️ Time conflict!</p>}
      </div>
    </Link>
  );
}
