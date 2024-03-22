import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24 space-y-16">
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
            <div className= "w-full flex justify-center">
                <p className= "font-mono text-2xl font-bold">
                    Modifikasi Mobil
                </p>
            </div>
            <div className= "w-full flex justify-center">
                <p className= "font-mono text-xl font-bold">
                    Body Kit Mobil
                </p>
            </div>
            <div className="relative flex space-x-8 place-items-center justify-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
            <div className= "w-1/3 flex flex-col">
                <p className= "font-mono text-md">
                Transformasikan tampilan mobil Anda dengan body kit custom dari BEMOMO. Kami menyediakan berbagai pilihan body kit yang dirancang untuk meningkatkan aerodinamika dan estetika mobil Anda. Dengan material berkualitas dan pemasangan oleh ahli, mobil Anda akan menonjol di jalan.
                </p>
            </div>
            <div className= "w-1/2">
                {" "}
                <Image
                    src="/modifmobil5.jpg"
                    alt="modifbody"
                    // className="w-full"
                    width={800}
                    height={1400}
                    priority
                />
            </div>
            </div>
            <div className= "w-full flex justify-center">
                <p className= "font-mono text-xl font-bold">
                    Lampu Mobil
                </p>
            </div>
            <div className="relative flex space-x-8 place-items-center justify-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
            <div className= "w-1/3 flex flex-col">
                <p className= "font-mono text-md">
                Tingkatkan visibilitas dan tampilan mobil Anda dengan sistem pencahayaan terkini. Dari LED canggih hingga HID yang terang, kami menyediakan solusi lampu yang akan membuat mobil Anda tidak hanya terlihat lebih modern tapi juga meningkatkan keamanan saat berkendara di malam hari.
                </p>
            </div>
            <div className= "w-1/2">
                {" "}
                <Image
                    src="/modifmobil1.jpeg"
                    alt="modiflampu"
                    className="w-full"
                    width={800}
                    height={1400}
                    priority
                />
            </div>
            </div>

            <div className= "w-full flex justify-center">
                <p className= "font-mono text-xl font-bold">
                    Velg Mobil
                </p>
            </div>
            <div className="relative flex space-x-8 place-items-center justify-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
            <div className= "w-1/3 flex flex-col">
                <p className= "font-mono text-md">
                Roda adalah salah satu elemen paling penting dalam estetika mobil. Di BEMOMO, kami menawarkan berbagai pilihan velg berkualitas tinggi yang tidak hanya meningkatkan tampilan mobil Anda tapi juga performanya. Pilih dari berbagai desain dan finish untuk menciptakan tampilan yang unik.
                </p>
            </div>
            <div className= "w-1/2">
                {" "}
                <Image
                    src="/modifmobil2.jpg"
                    alt="modifvelg"
                    className="w-full"
                    width={200}
                    height={400}
                    priority
                />
            </div>
            </div>

            <div className= "w-full flex justify-center">
                <p className= "font-mono text-2xl font-bold">
                    Modifikasi Motor
                </p>
            </div>

            <div className= "w-full flex justify-center">
                <p className= "font-mono text-xl font-bold">
                    Body Motor
                </p>
            </div>
            <div className="relative flex space-x-8 place-items-center justify-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
                <div className= "w-1/3 flex flex-col">
                    <p className= "font-mono text-md">
                        Dengan body kit custom dari BEMOMO, motor Anda akan bertransformasi menjadi karya seni bergerak. Kami menawarkan berbagai opsi body kit yang tidak hanya mempercantik tampilan motor Anda tetapi juga meningkatkan aerodinamika untuk performa yang lebih baik.
                    </p>
                </div>
                <div className= "w-1/2">
                    {" "}
                    <Image
                        src="/modifmotor1.jpeg"
                        alt="modifbody"
                        className="w-full"
                        width={200}
                        height={400}
                        priority
                    />
                </div>
            </div>

            <div className= "w-full flex justify-center">
                <p className= "font-mono text-xl font-bold">
                    Lampu Motor
                </p>
            </div>
            <div className="relative flex space-x-8 place-items-center justify-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
                <div className= "w-1/3 flex flex-col">
                    <p className= "font-mono text-md">
                        Upgrade pencahayaan motor Anda dengan solusi lampu terbaru dari BEMOMO. Baik Anda mencari lampu LED yang hemat energi atau lampu proyektor yang memberikan visibilitas superior, kami memiliki semua yang Anda butuhkan untuk membuat motor Anda bersinar terang di malam hari.
                    </p>
                </div>
                <div className= "w-1/2">
                    {" "}
                    <Image
                        src="/modifmotor3.jpg"
                        alt="modiflampu"
                        className="w-full"
                        width={200}
                        height={400}
                        priority
                    />
                </div>
            </div>

            <div className= "w-full flex justify-center">
                <p className= "font-mono text-xl font-bold">
                    Velg Motor
                </p>
            </div>
            <div className="relative flex space-x-8 place-items-center justify-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
                <div className= "w-1/3 flex flex-col">
                    <p className= "font-mono text-md">
                        Velg tidak hanya menunjang penampilan tetapi juga performa motor Anda. Kami menyediakan beragam pilihan velg motor yang ringan dan kuat, dirancang untuk memberikan peningkatan handling dan estetika. Pilih dari berbagai gaya dan finish untuk memberikan sentuhan personal pada roda Anda.
                    </p>
                </div>
                <div className= "w-1/2">
                    {" "}
                    <Image
                        src="/modifvelgmotor.webp"
                        alt="modifvelg"
                        className="w-full"
                        width={200}
                        height={400}
                        priority
                    />
                </div>
            </div>
        </main>
    );
}
