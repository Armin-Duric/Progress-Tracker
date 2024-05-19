import Link from "next/link";

export default function Home() {
  return (
    <main className="border-2 grid grid-cols-6 grid-rows-9 w-full h-full">
      <div className="flex w-full border-2 col-span-1 row-span-9">
        Profile section
      </div>
      <nav className="flex w-full h-full border-2 col-span-5 row-span-1">
        Navbar
      </nav>
      <div className="w-full h-full flex border-2 col-span-4 row-span-6">
        Greetings Section
      </div>
      <div className="flex w-full h-full border-2 col-span-1 row-span-6">
        Learning Section
      </div>
      <footer className="flex w-full h-full border-2 col-span-5 row-span-2">
        Footer
      </footer>
    </main>
  );
}
