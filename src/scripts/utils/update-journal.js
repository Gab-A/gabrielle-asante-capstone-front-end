import axios from "axios";

const updateJournal = async (journalId, newJournalEntry) => {
  try {
    const response = await axios.patch(
      `http://localhost:8000/journal/${journalId}`,
      newJournalEntry
    );
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
export default updateJournal;
