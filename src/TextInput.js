export default function TextInput(props) {
  return (
    <div className="">
      <div>
        <input
          type="email"
          className={props.className[0]}
          placeholder="What's your email?"
        />
      </div>
      <div className={props.className[1]}>
        <input type="button" value="£2k" />
        <input type="button" value="£5k" />
        <input type="button" value="No limit" />
      </div>
      <div className={props.className[2]}>
        <input type="textarea" />
      </div>
    </div>
  );
}
