export default function TextInput(props) {
  return (
    <div>
        <input className={props.className} type={props.type} placeholder={props.placeholder} />
        <div className="buttonContainer">
            <input type="button" value="£2k"/>
            <input type="button" value="£5k"/>
            <input type="button" value="No limit"/>   
        </div>   
    </div>
    );
}
