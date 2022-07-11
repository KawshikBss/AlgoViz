import "./Node.css";

function Node({ status, handleClick }) {
  return (
    <div
      className={`node ${status}`}
      onClick={handleClick}
      onDrag={handleClick}
    >
      {status === "start" ? (
        <span>&#x2638;</span>
      ) : status === "end" ? (
        <span>&#x2691;</span>
      ) : status === "path" ? (
        <span></span>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Node;
