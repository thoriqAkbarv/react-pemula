function MyButton() {
  return (
    <button style = {{}}>
      I'm a button
    </button>
  );
}

function MyButton2() {
  return (
    <button style = {{}}>
      I love You
    </button>
  );
}

export default function MyApp() {
  return (
    <div style = {{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: 20}}>
      <h1>Welcome to my app</h1>
      <MyButton /> <br/>
      <MyButton2 />
    </div>
  );
}
