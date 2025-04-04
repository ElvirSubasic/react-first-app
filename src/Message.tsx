function Message() {
  const name = "";
  return (
    <div>
      <h1>Hello {name ? name : "World"}!</h1>
    </div>
  );
}

export default Message;
