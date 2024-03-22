import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24 space-y-16">
            <nav className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
                <div className="fixed left-0 top-0 flex w-full justify-between space-x-8 border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                    <Link href="/" className="font-bold font-mono hover:underline">Home</Link>
                    <Link href="/about-us" className="font-bold font-mono hover:underline">About Us</Link>
                    <Link href="/contact-us" className="font-bold font-mono hover:underline">Contact US</Link>
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
                    Service Gacor Mobil dan Motor
                </p>
            </div>
            <div className= "w-full self-center">
                {" "}
                <Image
                    src="/servismomo.jpg"
                    alt="servismomo"
                    className="w-full"
                    width={800}
                    height={1400}
                    priority
                />
            </div>
            <div className="relative flex space-x-8 place-items-center justify-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
            <div className= "w-full flex flex-col space-y-8">
                <p className= "font-mono text-md">
                Di BEMOMO, kami mengerti bahwa mobil dan motor Anda lebih dari sekadar alat transportasi. Mereka adalah mitra perjalanan yang setia, membawa Anda ke destinasi penting dalam hidup. Itulah mengapa kami berkomitmen untuk memberikan layanan service yang tidak hanya memperbaiki, tapi juga meningkatkan kinerja dan keandalan kendaraan Anda.
                </p>
                <p className= "font-mono text-xl font-bold">
                    Service Mobil
                </p>
                <p className= "font-mono text-md">
                Mobil Anda layak mendapatkan perawatan terbaik. Di [Nama Bengkel Anda], kami menyediakan layanan service mobil yang tidak hanya memperbaiki masalah yang ada tapi juga mencegah masalah di masa depan. Tim ahli kami dilengkapi dengan peralatan terbaru untuk memberikan service berkualitas pada mobil Anda.
                </p>
                <p className= "font-mono text-lg">
                Layanan Kami:
                </p>
                <ul className="font-mono space-y-2 list-disc ml-16">
                    <li>Service & Perawatan Berkala: Layanan kami mencakup penggantian oli, pengecekan dan penggantian filter, serta pemeriksaan umum untuk menjaga mobil Anda beroperasi secara optimal.</li>
                    <li>Diagnostik dan Perbaikan: Kami menggunakan teknologi diagnostik terkini untuk mengidentifikasi dan memperbaiki masalah pada mobil Anda, termasuk masalah mesin, transmisi, dan sistem pengereman.</li>
                    <li>Tuning & Modifikasi: Tawarkan mobil Anda peningkatan performa dan estetika dengan layanan tuning dan modifikasi kami. Dari peningkatan mesin hingga body kit custom, kami membantu mewujudkan mobil impian Anda.</li>
                    <li>Inspeksi Keselamatan: Dapatkan ketenangan pikiran dalam setiap perjalanan dengan layanan inspeksi keselamatan kami. Kami memeriksa semua aspek keselamatan mobil Anda untuk memastikan bahwa semuanya berfungsi sebagaimana mestinya.</li>
                </ul>
                <p className= "font-mono text-xl font-bold">
                    Service Motor
                </p>
                <p className= "font-mono text-md">
                    Di BEMOMO, kami mengerti pentingnya menjaga motor Anda agar selalu dalam kondisi terbaik. Motor bukan hanya alat transportasi, tapi juga ekspresi gaya hidup dan kebebasan. Oleh karena itu, kami menawarkan layanan service motor yang komprehensif untuk memastikan perjalanan Anda selalu lancar dan aman.
                </p>
                <p className= "font-mono text-lg">
                    Layanan Kami:
                </p>
                <ul className="font-mono space-y-2 list-disc ml-16">
                    <li>Perawatan Rutin: Dari penggantian oli hingga penyetelan karburator, kami menangani semua kebutuhan perawatan rutin motor Anda.</li>
                    <li>Perbaikan Mekanis: Kami memiliki teknisi yang berpengalaman dan peralatan canggih untuk mengatasi berbagai masalah mekanis, mulai dari masalah mesin hingga sistem kelistrikan.</li>
                    <li>Customisasi & Upgrade: Ingin meningkatkan performa atau tampilan motor Anda? Kami siap membantu dengan berbagai opsi customisasi dan upgrade.</li>
                    <li>Pengecekan Keselamatan: Keselamatan Anda adalah prioritas kami. Layanan pengecekan keselamatan kami memastikan semua sistem keselamatan motor Anda berfungsi dengan baik.</li>
                </ul>
            </div>
            </div>
        </main>
    );
}
