export default function CharacterPage({ params }: { params: { id: string } }) {
  return <div style={{ color: "red" }}>My Post: {params.id}</div>;
}
