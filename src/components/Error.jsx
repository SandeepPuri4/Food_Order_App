export default function Error({ title, meassage }) {
  return (
    <div className="error">
      <h2>{title}</h2>
      <p>{meassage}</p>
    </div>
  );
}
