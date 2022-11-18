import classes from "./comment-list.module.css";

function CommentList(props) {
  const { items } = props;
  return (
    <ul className={classes.comments}>
      {items.map((item) => (
        <li key={item.id}>
          {" "}
          <p>{items.text}</p>
          <div>
            By <address>{items.name}</address>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default CommentList;
