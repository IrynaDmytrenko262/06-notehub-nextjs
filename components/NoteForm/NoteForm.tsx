interface Props {
  onClose: () => void;
}

export default function NoteForm({ onClose }: Props) {
  return (
    <form>
      <input placeholder="Title" />
      <textarea placeholder="Content"></textarea>

      <button type="submit">Create</button>
      <button type="button" onClick={onClose}>
        Cancel
      </button>
    </form>
  );
}