import Banner from "./components/Banner/banner";
import Header from "./components/Header/Header";
import Support from "./components/Support/Support";

export default function Home() {
  return (
    <main>
      <Header />
      <Banner />
      <Support />
      <div className="bg-danger">home</div>;
    </main>
  );
}
