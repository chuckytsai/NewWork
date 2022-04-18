import "../../../styles/Obj/Nature/cloud.css";

// 雲(通常狀況)
export function Cloud(props) {
  return <div className={props.className + " Cloud"}>
    <div className="CloudS1"></div>
    <div className="CloudS2"></div>
    <div className="CloudS3"></div>
    <div className="CloudS4"></div>
  </div>
}