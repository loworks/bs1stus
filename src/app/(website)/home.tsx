import IndexAbout from "./sections/IndexAbout";
import IndexHeader from "./sections/IndexHeader";
import IndexHeader2 from "./sections/IndexHeader2";
import IndexJournal from "./sections/IndexJournal";
import IndexPress from "./sections/IndexPress";
import IndexShop from "./sections/IndexShop";

export default function Home() {
  return (
    <main
      data-categoryname={"Index"}
      data-categoryslug={"index"}
      data-color={"#fefefe"}
      className="md:space-y-[10vw]"
    >
      <IndexHeader />
      <IndexAbout />
      <IndexShop />
      <IndexJournal />
      <IndexPress />
    </main>
  );
}
