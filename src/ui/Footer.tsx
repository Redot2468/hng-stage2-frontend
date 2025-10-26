export default function Footer() {
  return (
    <footer className="border-t w-full py-6 px-8 space-y-5 flex flex-col items-center  ">
      <div className="flex items-center gap-4">
        <img src="/logo-1.png" alt="" className="size-[30px]" />
        <h1 className="text-lg text-neutral-800 font-semibold">TicketFlow</h1>
      </div>
      <p className="text-neutral-600 text-[15px]">
        &copy; {new Date().getFullYear()} TicketFlow. All rights reserved.
      </p>
    </footer>
  );
}
