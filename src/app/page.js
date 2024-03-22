import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <nav className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
                <div className="fixed left-0 top-0 flex w-full justify-between space-x-8 border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                    <Link href="/" className="font-bold font-mono hover:underline">Home</Link>
                    <Link href="/about-us" className="font-bold font-mono hover:underline">About Us</Link>
                    <Link href="/contact-us" className="font-bold font-mono hover:underline">Contact Us</Link>
                </div>
                <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
                    <Link className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0 text-lg font-bold font-mono" href="/">
                        {" "}
                        <Image
                            src="/logo.png"
                            alt="Drill"
                            className="animate-pulse"
                            width={150}
                            height={75}
                            priority
                        />
                    </Link>
                </div>
            </nav>  
            <div className="relative flex flex-col place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
                <p>"Bemomo memberikan kualitas <span className="font-bold">terbaik dan termurah se-Indonesia</span>."</p>
                <p>"Bengkel terbaik se-Indonesia"</p>
            </div>
            <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
                <Link href="/sparepart"  className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
                    <h2 className={`mb-3 text-2xl font-semibold`}>
                        Sparepart
                    </h2>
                    <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                        Kami menjual sparepart mobil dan motor yang berkualitas.
                    </p>
                </Link>
                <Link href="/servis" className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30">
                    <h2 className={`mb-3 text-2xl font-semibold`}>
                        Servis
                    </h2>
                    <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                        Kami menerima servis mobil dan motor jenis apapun.
                    </p>
                </Link>
                <Link href="/modifikasi" className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
                    <h2 className={`mb-3 text-2xl font-semibold`}>
                        Modifikasi
                    </h2>
                    <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                        Kami menerima modifikasi mobil dan motor seperti body, lampu, dan velg.
                    </p>  
                </Link>
                <Link href="/reparasi" className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
                    <h2 className={`mb-3 text-2xl font-semibold`}>
                        Reparasi
                    </h2>
                    <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
                        Kami menerima jasa reparasi mobil dan motor.
                    </p>
                </Link>
            </div>
        </main>
    );
}
