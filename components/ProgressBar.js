import "../Styles/ProgressBar.css";
export default function ProgressBar(props) {
  return (
    <div className="progress">
      <div style={{ width: `${props.progress}%` }} className="fill">
        <div>{props.progress}</div>
      </div>
    </div>
  );
}
