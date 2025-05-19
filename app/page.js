import Banner from "./components/Banner/banner";
import Category from "./components/Category/Category";
import Header from "./components/Header/Header";
import Support from "./components/Support/Support";

export default function Home() {
  return (
    <main>
      <Header />
      <Banner />
      <Support />
      <Category />
      <div className="bg-danger">home</div>;
    </main>
  );
}
