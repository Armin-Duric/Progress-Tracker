import Link from "next/link";

export default function Home() {
  return (
    <main className="border-2 grid grid-cols-8 grid-rows-3 w-full h-full">
      <div className="flex w-full border-2 col-span-2 row-span-3">
        Profile section
      </div>
      <nav className="flex w-full border-2 col-span-6">Navbar</nav>
      <div className="w-full h-full flex border-2 col-span-4">
        Greetings Section
      </div>
      <div className="flex w-full border-2 col-span-2">Learning Section</div>
      <footer className="flex w-full h-[50px] border-2 col-span-6">
        Footer
      </footer>
    </main>
  );
}
