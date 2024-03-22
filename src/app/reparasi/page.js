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
                    Reparasi Mantul Mobil dan Motor
                </p>
            </div>
            <div className= "w-full self-center">
                {" "}
                <Image
                    src="/filterolimobil.jpg"
                    alt="filter oli mov"
                    className="w-full"
                    width={800}
                    height={1400}
                    priority
                />
            </div>
            <div className="relative flex space-x-8 place-items-center justify-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
                <div className= "w-full flex flex-col space-y-8">
                    <p className= "font-mono text-xl font-bold">
                        Reparasi Motor
                    </p>
                    <p className= "font-mono text-md">
                    Di Motor, kami mengerti bahwa setiap motor memiliki cerita dan tantangan tersendiri. Apakah itu kerusakan ringan atau masalah mekanis berat, tim kami memiliki keahlian dan peralatan untuk mengatasi masalah tersebut. Kami berkomitmen untuk mengembalikan performa dan keandalan motor Anda dengan layanan reparasi yang cepat dan efisien.
                    </p>
                    <p className= "font-mono text-lg">
                    Layanan Kami:
                    </p>
                    <ul className="font-mono space-y-2 list-disc ml-16">
                        <li>Reparasi Mesin: Dari overhauling mesin hingga penyetelan ulang, kami menawarkan solusi komprehensif untuk masalah mesin motor Anda.</li>
                        <li>Sistem Kelistrikan: Masalah kelistrikan dapat menghambat kinerja motor. Tim kami siap memperbaiki starter, lampu, dan komponen elektrik lainnya.</li>
                        <li>Perbaikan Rangka & Suspensi: Kecelakaan dan penggunaan sehari-hari dapat merusak rangka dan suspensi. Kami menyediakan layanan reparasi dan penggantian untuk mengembalikan kondisi optimal motor Anda.</li>
                        <li>Servis Ban & Rem: Untuk keselamatan berkendara, perawatan ban dan rem tidak bisa diabaikan. Kami menawarkan pemeriksaan dan perbaikan komprehensif untuk sistem pengereman dan kondisi ban motor Anda.</li>
                    </ul>
                    <p className= "font-mono text-xl font-bold">
                        Reparasi Mobil
                    </p>
                    <p className= "font-mono text-md">
                        Mobil Anda adalah investasi berharga yang membutuhkan perawatan dan perbaikan profesional untuk menjaga performanya. Di BEMOMO, kami menawarkan layanan reparasi mobil dengan standar tertinggi, menggunakan bagian pengganti berkualitas dan teknologi terkini untuk menangani berbagai masalah, dari yang sederhana hingga yang kompleks.
                    </p>
                    <p className= "font-mono text-lg">
                        Layanan Kami:
                    </p>
                    <ul className="font-mono space-y-2 list-disc ml-16">
                        <li>Reparasi Mesin & Transmisi: Kami spesialisasi dalam reparasi mesin dan transmisi, menawarkan segala dari servis rutin hingga perbaikan komprehensif untuk memastikan mobil Anda berjalan dengan halus.</li>
                        <li>Sistem Elektrikal & Pengapian: Masalah pada sistem elektrikal dan pengapian dapat mengurangi efisiensi bahan bakar dan performa. Tim kami siap mengatasi masalah ini dan mengembalikan efisiensi kendaraan Anda.</li>
                        <li>Bodywork & Cat: Dari goresan kecil hingga kerusakan akibat tabrakan, layanan bodywork dan cat kami mengembalikan estetika mobil Anda ke kondisi semula.</li>
                        <li>Perbaikan Suspensi & Steering: Untuk kenyamanan dan keamanan berkendara, sistem suspensi dan steering yang berfungsi dengan baik adalah kunci. Kami menawarkan pemeriksaan dan perbaikan komprehensif untuk memastikan kendali dan kenyamanan berkendara Anda.</li>
                    </ul>
                    <p className= "font-mono text-md">
                        Kami bangga dengan kualitas pekerjaan dan kepuasan pelanggan. Dengan tim teknisi yang berpengalaman dan fasilitas yang lengkap, kami siap menangani semua kebutuhan reparasi motor dan mobil Anda. Hubungi kami hari ini untuk menjadwalkan layanan atau berkonsultasi mengenai masalah kendaraan Anda. Kami di sini untuk membantu!
                    </p>
                </div>
            </div>
        </main>
    );
}
