function App() {
  const value = '123';

  return (
    <>
      <h1>Welcome, John!</h1>
      <button>OK</button>
      <Page value={value} />
    </>
  );
}

const Page = ({value}: {value: boolean}) {
  return (
    <div>{value}</div>
  )
}
export default App;
