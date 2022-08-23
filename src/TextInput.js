export default function TextInput(props) {
  const inputBtnTxt = ["£2k", "£5k", "No limit"];
  return (
    <div>
      <div>
        <input
          type="email"
          className={props.className[0]}
          placeholder="What's your email?"
          onChange={props.onChange}
          name="Email Address"
        />
      </div>
      <div className={props.className[1]}>
        {inputBtnTxt.map((btnTxt) => (
          <input
            onClick={props.onChange}
            type="button"
            value={btnTxt}
            name="Budget"
          />
        ))}
      </div>
      <div className={props.className[2]}>
        <input
          onChange={props.onChange}
          type="textarea"
          name="Additional Info"
        />
      </div>
    </div>
  );
}
