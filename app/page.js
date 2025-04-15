import Banner from "./components/Banner/banner";
import Header from "./components/Header/Header";

export default function Home() {
  return (
    <main>
      <Header />
      <Banner />
      <div className="bg-danger">home</div>;
    </main>
  );
}
