import Header from "./components/Header";
import HelloMessage from "./components/HelloMessage";
import InfoPanel from "./components/InfoPanel";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Header />
      <main className="flex-1">
        <HelloMessage />
        <InfoPanel />
      </main>
      <Footer />
    </div>
  );
}

export default App;
