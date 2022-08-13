export default function ButtonGroup(props) {
  return (
    <div>
      <button onClick={props.onClick} className={props.className}>
        Next
      </button>
    </div>
  );
}
