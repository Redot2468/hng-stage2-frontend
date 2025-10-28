export default function AuthNavbar() {
  return (
    <nav className="border-b border-neutral-200 h-[70px] font-bold flex items-center px-6 bg-white/30 backdrop-blur-xs">
      <div className="flex items-center gap-4">
        <img src="/logo-1.png" alt="" className="size-[30px]" />
        <h1 className="text-xl text-neutral-800">TicketMS</h1>
      </div>
    </nav>
  );
}
