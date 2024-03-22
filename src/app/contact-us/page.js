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
            
            <div className="relative flex my-32 space-x-8 place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
                <div className= "w-1/3 flex flex-col">
                    <p className= "font-mono text-md">
                        Whatsapp: +6181234567890
                    </p>
                    <p className= "font-mono text-md">
                        Email: info@bemomo.com
                    </p>
                    <p className= "font-mono text-md">
                        Website: bemomo.com
                    </p>
                    <p className= "font-mono text-md">
                        Alamat: Jl. Bakal No. 184, Taman Baloi, Batam Kota, Kep. Riau
                    </p>
                </div>
                <div className= "w-2/3">
                    {" "}
                        <Image
                            src="/peta.png"
                            alt="peta"
                            className="w-full"
                            width={200}
                            height={400}
                            priority
                        />
                </div>
            </div>

            <div className= "w-full flex justify-center">
                <p className= "font-mono text-xl font-bold">
                    Kalian tidak akan menyesal saat datang ke BEMOMO.
                </p>
            </div>
        </main>
    );
}
