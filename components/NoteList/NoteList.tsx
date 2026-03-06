import { Note } from "@/types/note";

interface Props {
  notes: Note[];
}

export default function NoteList({ notes }: Props) {
  return (
    <ul>
      {notes.map((note) => (
        <li key={note.id}>{note.title}</li>
      ))}
    </ul>
  );
}