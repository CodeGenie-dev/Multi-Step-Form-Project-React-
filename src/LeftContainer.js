export default function LeftContainer(props) {
  const TITLE_DATA = [
    "Apply to work with our agency",
    "What's your budget?",
    "Anything else we should know?",
    "Thank you!"
  ];
  return <h1>{TITLE_DATA[props.title]}</h1>;
}
