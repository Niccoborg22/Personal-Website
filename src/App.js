import Header from "./components/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  const personalDetails = {
    name: "Niccoló Borgato",
    location: "Madrid, IT",
    email: "borgato.niccolo@gmail.com",
    availability: "Open for work",
    brand: "Niccoló Borgato | Software Developer.",
  };

  return (
    <>
      <Header />
      <AnimatedRoutes personalDetails={personalDetails} />
    </>
  );
}

export default App;
