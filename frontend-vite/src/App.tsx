import MyButton from "./components/MyButton";

function App() {
  return (
    <div className="flex justify-center mt-20">
      <MyButton
        label="GET STARTED NOW"
        link="/services"
        hasBorderRadius={true}
      />
    </div>
  );
}

export default App;