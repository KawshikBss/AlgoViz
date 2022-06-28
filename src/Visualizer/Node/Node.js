import "./Node.css";

function Node({ status, handleClick }) {
  return (
    <div
      className={`node ${status}`}
      onClick={handleClick}
      onDrag={handleClick}
    ></div>
  );
}

export default Node;
