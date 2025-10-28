export default function HomeFooter() {
  return (
    <footer className="border-t w-full py-6 px-8 space-y-5 flex justify-between items-center flex-col sm:flex-row   ">
      <div className="flex items-center gap-4">
        <img src="/logo-1.png" alt="" className="size-[30px]" />
        <h1 className="text-xl text-neutral-800 font-semibold">TicketMS</h1>
      </div>
      <p className="text-neutral-600 text-[15px]">
        &copy; {new Date().getFullYear()} TicketMS. All rights reserved.
      </p>
    </footer>
  );
}
