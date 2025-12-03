import AgendaList from "../../components/agenda/AgendaList";
import styles from "../../styles/shared/CardList.module.css";

export default function AgendaPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>My Agenda</h1>
      <AgendaList />
    </div>
  );
}
