import "./Button.scss";

export const Button = (props) => {
  return (
    <>
      <button
        type={props.type}
        onClick={props.onClick}
        onSubmit={props.onSubmit}
        id={props.id}
        className="btn"
      >
        {props.title}
      </button>
    </>
  );
};
