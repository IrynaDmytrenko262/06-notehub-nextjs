interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBox({ value, onChange }: Props) {
  return (
    <input
      type="text"
      value={value}
      placeholder="Search..."
      onChange={(e) => onChange(e.target.value)}
    />
  );
}