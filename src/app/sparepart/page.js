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
                    Sparepart Mobil & Fungsinya
                </p>
            </div>
            <div className= "w-full flex justify-center">
                <p className= "font-mono text-xl font-bold">
                    Filter Oli
                </p>
            </div>
            <div className="relative flex space-x-8 place-items-center justify-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
            <div className= "w-1/3 flex flex-col">
                <p className= "font-mono text-md">
                Filter oli adalah salah satu komponen penting dalam sistem pelumasan mobil, berfungsi untuk menyaring kotoran dan partikel-partikel kecil dalam oli yang dapat menyebabkan keausan pada mesin.
                Komponen ini secara teratur perlu diganti untuk menjaga kualitas oli yang digunakan. Jika filter oli tidak diganti secara tepat waktu, kotoran dapat menyumbat filter dan menyebabkan sirkulasi oli yang buruk, sehingga berpotensi merusak mesin.
                </p>
            </div>
            <div className= "w-1/2">
                {" "}
                <Image
                    src="/filterolimobil.jpg"
                    alt="filterolimobil"
                    className="w-full"
                    width={800}
                    height={1400}
                    priority
                />
            </div>
            </div>
            <div className= "w-full flex justify-center">
                <p className= "font-mono text-xl font-bold">
                    Kampas Rem
                </p>
            </div>
            <div className="relative flex space-x-8 place-items-center justify-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
            <div className= "w-1/3 flex flex-col">
                <p className= "font-mono text-md">
                Kampas rem adalah bagian dari sistem pengereman mobil yang sangat vital, sebab bertugas menghasilkan gaya gesekan yang diperlukan untuk memperlambat laju atau menghentikan kendaraan.
                Jika sampai aus, maka dapat mengurangi efektifitas pengereman. Meski umumnya terbuat dari bahan yang tahan aus seperti komposit atau logam, tetapi bahannya akan terkikis seiring waktu sehingga perlu diganti secara berkala.            
                </p>
            </div>
            <div className= "w-1/2">
                {" "}
                <Image
                    src="/kampasremmobill.jpeg"
                    alt="kampasremmobil"
                    className="w-full"
                    width={800}
                    height={1400}
                    priority
                />
            </div>
            </div>
            <div className= "w-full flex justify-center">
                <p className= "font-mono text-xl font-bold">
                    Busi
                </p>
            </div>
            <div className="relative flex space-x-8 place-items-center justify-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
                <div className= "w-1/3 flex flex-col">
                    <p className= "font-mono text-md">
                    Busi merupakan komponen yang bertanggung jawab melakukan pembakaran campuran bahan bakar serta udara dalam ruang bakar mesin.
                    Fungsinya adalah menghasilkan percikan listrik untuk membakar campuran tersebut. Busi yang baik akan memastikan pembakaran yang efisien, mengoptimalkan performa mesin, dan mengurangi emisi gas buang yang berbahaya.            
                    </p>
                </div>
                <div className= "w-1/2">
                    {" "}
                    <Image
                        src="/busimobil.jpg"
                        alt="busimobil"
                        className="w-full"
                        width={200}
                        height={400}
                        priority
                    />
                </div>
            </div>
            <div className= "w-full flex justify-center">
                <p className= "font-mono text-xl font-bold">
                    Kampas Kopling
                </p>
            </div>
            <div className="relative flex space-x-8 place-items-center justify-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
            <div className= "w-1/3 flex flex-col">
                <p className= "font-mono text-md">
                Bagi mobil dengan transmisi manual, kampas kopling merupakan salah satu sparepart penting. Fungsinya adalah mentransmisikan tenaga mesin ke transmisi dengan memisahkan dan menghubungkan mesin dengan roda penggerak.

                Kampas kopling yang aus atau rusak dapat mengakibatkan kopling selip atau kendaraan sulit berakselerasi dengan baik. Itu sebabnya, penggantian kampas kopling secara rutin penting  dilakukan untuk menjaga kinerja dan keandalannya.            </p>
            </div>
            <div className= "w-1/2">
                {" "}
                <Image
                    src="/kampaskoplingmobil.jpg"
                    alt="kampaskopling"
                    className="w-full"
                    width={200}
                    height={400}
                    priority
                />
            </div>
            </div>
            <div className= "w-full flex justify-center">
                <p className= "font-mono text-xl font-bold">
                    Aki
                </p>
            </div>
            <div className="relative flex space-x-8 place-items-center justify-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
            <div className= "w-1/3 flex flex-col">
                <p className= "font-mono text-md">
                Aki atau accu adalah sumber daya listrik utama pada mobil yang digunakan untuk menghidupkan mesin dan mendukung berbagai sistem listrik. Sparepart ini berfungsi menyimpan dan memasok energi listrik saat mesin mati.

                Artinya, aki yang buruk atau lemah dapat menyebabkan kendaraan sulit menyala atau mogok. Sehingga, aki perlu dirawat dan diganti secara berkala agar mobil tetap bisa menyala.            
                </p>
            </div>
            <div className= "w-1/2">
                {" "}
                <Image
                    src="/akimobil.png"
                    alt="akimobil"
                    className="w-full"
                    width={200}
                    height={400}
                    priority
                />
            </div>
            </div>
            <div className= "w-full flex justify-center">
                <p className= "font-mono text-xl font-bold">
                    Radiator
                </p>
            </div>
            <div className="relative flex space-x-8 place-items-center justify-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
            <div className= "w-1/3 flex flex-col">
                <br></br>
                <p className= "font-mono text-md">
                Radiator merupakan komponen penting dalam sistem pendinginan kendaraan. Fungsinya adalah menghilangkan panas berlebih yang dihasilkan oleh mesin selama proses pembakaran.
                Radiator menggunakan air dan coolant khusus untuk menyerap panas dan membuangnya melalui proses perpindahan panas. Sehingga jika rusak atau bocor, maka dapat mengakibatkan overheat pada mesin.            
                </p>
            </div>
            <div className= "w-1/2">
                {" "}
                <Image
                    src="/radiatormobil.jpg"
                    alt="radiatormobil"
                    className="w-full"
                    width={200}
                    height={400}
                    priority
                />
            </div>
            </div>
            <div className= "w-full flex justify-center">
                <p className= "font-mono text-xl font-bold">
                    Timing Belt
                </p>
            </div>
            <div className="relative flex space-x-8 place-items-center justify-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
            <div className= "w-1/3 flex flex-col">
                <p className= "font-mono text-md">
                Timing belt merupakan komponen yang menghubungkan poros engkol dengan poros nok-kruk pada mesin mobil. Fungsi sparepart ini adalah untuk mengatur sinkronisasi gerakan klep dengan pergerakan piston dalam mesin.
                Komponen timing belt bekerja untuk memastikan klep terbuka dan tertutup tepat waktu saat proses pembakaran. Jika aus, kendor, atau putus, maka dapat menyebabkan mesin mati tiba-tiba, kerusakan klep dan piston, bahkan merusak sistem penggerak.            
                </p>
            </div>
            <div className= "w-1/2">
                {" "}
                <Image
                    src="/timingbelt.png"
                    alt="timingbelt"
                    className="w-full"
                    width={200}
                    height={400}
                    priority
                />
            </div>
            </div>
            <div className= "w-full flex justify-center">
                <p className= "font-mono text-xl font-bold">
                    V-Belt
                </p>
            </div>
            <div className="relative flex space-x-8 place-items-center justify-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
            <div className= "w-1/3 flex flex-col">
                <p className= "font-mono text-md">
                V-belt atau biasa disebut sebagai belt penggerak merupakan komponen yang bertugas menggerakkan berbagai sistem di dalam mesin mobil, seperti sistem pengisian daya, pompa air, dan kompresor AC.
                Fungsinya adalah menghubungkan poros mesin dengan komponen lainnya sehingga dapat beroperasi secara sinkron. Belt yang aus atau longgar dapat mengganggu fungsi sistem yang terhubung, bahkan menyebabkan kerusakan pada komponen lainnya.            
                </p>
            </div>
            <div className= "w-1/2">
                {" "}
                <Image
                    src="/v-belt.jpg"
                    alt="v-belt"
                    className="w-full"
                    width={200}
                    height={400}
                    priority
                />
            </div>
            </div>

            <div className= "w-full flex justify-center">
                <p className= "font-mono text-xl font-bold">
                    Shock Absorber
                </p>
            </div>
            <div className="relative flex space-x-8 place-items-center justify-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
            <div className= "w-1/3 flex flex-col">
                <p className= "font-mono text-md">
                Shock absorber atau peredam kejut adalah sparepart mobil yang merupakan bagian dari sistem suspensi. Sesuai namanya, ini berfungsi untuk menyerap goncangan dan getaran saat kendaraan melintasi jalan yang tidak rata.
                Sehingga, kestabilan dan kenyamanan berkendara akan tetap terjaga. Penggantian shock absorber secara teratur akan memastikan kinerja suspensi yang optimal agar kemampuan suspensi menyerap guncangan tetap terkendali.
                </p>
            </div>
            <div className= "w-1/2">
                {" "}
                <Image
                    src="/shockabsorbermobil.jpg"
                    alt="shockabsorber"
                    className="w-full"
                    width={200}
                    height={400}
                    priority
                />
            </div>
            </div>

            <div className= "w-full flex justify-center">
                <p className= "font-mono text-xl font-bold">
                    Filter Udara
                </p>
            </div>
            <div className="relative flex space-x-8 place-items-center justify-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
            <div className= "w-1/3 flex flex-col">
                <p className= "font-mono text-md">
                Filter udara adalah komponen yang bertugas menyaring udara yang masuk ke dalam mesin untuk pembakaran. Fungsinya adalah menjaga agar udara bersih dari kotoran dan debu yang dapat merusak mesin.
                Filter udara yang kotor atau tersumbat dapat mengurangi aliran udara yang masuk, mengurangi performa mesin, dan meningkatkan konsumsi bahan bakar, sehingga perlu diperiksa dan diganti secara berkala.
                </p>
            </div>
            <div className= "w-1/2">
                {" "}
                <Image
                    src="/filterudaramobil.jpg"
                    alt="filterudara"
                    className="w-full"
                    width={200}
                    height={400}    
                    priority
                />
            </div>
            </div>

            <div className= "w-full flex justify-center">
                <p className= "font-mono text-xl font-bold">
                    Bearing Roda
                </p>
            </div>
            <div className="relative flex space-x-8 place-items-center justify-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
            <div className= "w-1/3 flex flex-col">
                <p className= "font-mono text-md">
                Bearing roda merupakan komponen yang memungkinkan roda berputar dengan bebas pada porosnya. Fungsi komponen ini adalah untuk mendukung beban kendaraan dan mengurangi gesekan saat roda berputar.
                Bearing yang aus atau rusak dapat menyebabkan bunyi berdecit, getaran pada kendaraan, dan bahkan kerusakan pada roda dan sistem suspensi. Sehingga, penggantian bearing roda secara rutin penting untuk dilakukan.            
                </p>
            </div>
            <div className= "w-1/2">
                {" "}
                <Image
                    src="/bearingrodamobil.jpg"
                    alt="bearingroda"
                    className="w-full"
                    width={200}
                    height={400}
                    priority
                />
            </div>
            </div>

            <div className= "w-full flex justify-center">
                <p className= "font-mono text-2xl font-bold">
                    Sparepart Motor & Fungsinya
                </p>
            </div>

            <div className= "w-full flex justify-center">
                <p className= "font-mono text-xl font-bold">
                    Ban
                </p>
            </div>
            <div className="relative flex space-x-8 place-items-center justify-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
                <div className= "w-1/3 flex flex-col">
                    <p className= "font-mono text-md">
                    Ban merupakan suku cadang yang sangat penting bagi motor, sehingga penting bagi Anda untuk melakukan pengecekan berkala. Pastikan selalu bahwa ban motor berada dalam kondisi baik, tidak kempes, bocor, atau aus.
                    Secara umum, penggantian Ban dilakukan sekali dalam setahun. Namun, penggantian ini juga dapat tergantung dari pemakaiannya.
                    Jika Anda sering melewati jalan yang kondisinya kurang baik, kondisinya harus lebih diperhatikan. Ketika kondisi ban sudah mulai aus atau mengalami retakan, sebaiknya segera diganti, sebab hal tersebut dapat berbahaya bagi perjalanan Anda.        
                    </p>
                </div>
                <div className= "w-1/2">
                    {" "}
                    <Image
                        src="/banmotor.webp"
                        alt="banmotor"
                        className="w-full"
                        width={200}
                        height={400}
                        priority
                    />
                </div>
            </div>

            <div className= "w-full flex justify-center">
                <p className= "font-mono text-xl font-bold">
                    Aki
                </p>
            </div>
            <div className="relative flex space-x-8 place-items-center justify-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
                <div className= "w-1/3 flex flex-col">
                    <p className= "font-mono text-md">
                    Aki merupakan spare part motor yang bertugas untuk menyalurkan daya sehingga mesin dapat menyala dengan baik. Dengan kata lain, aki memiliki fungsi untuk melakukan operasi terhadap sistem kelistrikan dalam motor Anda.
                    Jika jenis motor Anda adalah yang memakai aki basah, Anda harus rutin memeriksa kondisi aki tersebut. Selebihnya, jika motor memakai aki kering, penggantian aki biasanya dilakukan dalam satu setengah hingga dua tahun sekali.
                    Penggantian aki juga dipengaruhi oleh penggunaan motor. Ada baiknya hal ini menjadi perhatian pada setiap pemeriksaan rutin (servis).            
                    </p>
                </div>
                <div className= "w-1/2">
                    {" "}
                    <Image
                        src="/akimotor.webp"
                        alt="akimotor"
                        className="w-full"
                        width={200}
                        height={400}
                        priority
                    />
                </div>
            </div>

            <div className= "w-full flex justify-center">
                <p className= "font-mono text-xl font-bold">
                    Lampu
                </p>
            </div>
            <div className="relative flex space-x-8 place-items-center justify-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
                <div className= "w-1/3 flex flex-col">
                    <p className= "font-mono text-md">
                    Lampu tersebut menjadi penting untuk aspek keamanan, terutama ketika melewati jalan yang gelap atau memiliki sedikit penerangan.
                    Selanjutnya, ada lampu rem yang berfungsi untuk menjadi penanda bagi pengendara di belakang, supaya tahu bahwa kita sedang melakukan pengereman.
                    Terakhir, ada lampu sein yang juga berfungsi sebagai penanda. Lampu ini memberi tanda ketika Anda hendak berbelok ke arah kanan atau kiri. Penggunaannya harus benar, supaya tidak membuat pengguna jalan lain menjadi bingung.
                    Sama seperti aki, bagian lampu motor ini juga memiliki batas untuk usia pemakaiannya. Ketika lampu sudah mulai redup, maka perlu dilakukan pengecekan. Jika sudah waktunya diganti, maka sebaiknya langsung diganti supaya tidak membahayakan.
                    </p>
                </div>
                <div className= "w-1/2">
                    {" "}
                    <Image
                        src="/lampumotor.webp"
                        alt="lampu"
                        className="w-full"
                        width={200}
                        height={400}
                        priority
                    />
                </div>
            </div>

            <div className= "w-full flex justify-center">
                <p className= "font-mono text-xl font-bold">
                    Busi
                </p>
            </div>
            <div className="relative flex space-x-8 place-items-center justify-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
                <div className= "w-1/3 flex flex-col">
                    <p className= "font-mono text-md">
                    Fungsi dari busi yakni sebagai pemantik api supaya pembakaran dalam mesin dapat bekerja sesuai kendali. Jika busi sudah terlihat kotor, maka sebaiknya Anda segera menggantinya.
                    Bagian ini sangat perlu untuk diperhatikan. Jika busi bermasalah, mesin dari motor Anda pun tidak dapat menjalankan fungsinya secara normal.
                    Secara umum, biasanya busi diganti setelah motor telah menempuh jarak 20 ribu kilometer dan 50 ribu kilometer.
                    </p>
                </div>
                <div className= "w-1/2">
                    {" "}
                    <Image
                        src="/busimotor.jpg"
                        alt="busimotor"
                        className="w-full"
                        width={200}
                        height={400}
                        priority
                    />
                </div>
            </div>

            <div className= "w-full flex justify-center">
                <p className= "font-mono text-xl font-bold">
                    Kampas Kopling
                </p>
            </div>
            <div className="relative flex space-x-8 place-items-center justify-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
                <div className= "w-1/3 flex flex-col">
                    <p className= "font-mono text-md">
                    Kampas kopling perlu menjadi perhatian dan dilakukan penggantian secara berkala.
                    Apabila kampas sudah dirasa aus serta tidak bisa menjalankan fungsi dengan baik ketika digunakan, maka sebaiknya segera Anda ganti.
                    </p>
                </div>
                <div className= "w-1/2">
                    {" "}
                    <Image
                        src="/kampaskoplingmotor.jpg"
                        alt="kampaskoplingmotor"
                        className="w-full"
                        width={200}
                        height={400}
                        priority
                    />
                </div>
            </div>

            <div className= "w-full flex justify-center">
                <p className= "font-mono text-xl font-bold">
                    Kampas Rem
                </p>
            </div>
            <div className="relative flex space-x-8 place-items-center justify-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
                <div className= "w-1/3 flex flex-col">
                    <p className= "font-mono text-md">
                    Kampas rem ini berfungsi untuk melakukan kontrol terhadap kecepatan, juga untuk menghentikan motor.
                    Biasanya, kampas rem diganti ketika motor telah menempuh hingga jarak 20 ribu kilometer. Namun, jika kampas rem sudah aus atau terlihat makin menipis, sebaiknya Anda juga segera menggantinya.
                    Kampas rem merupakan komponen yang penting dan sangat vital bagi  motor, sebab sangat berhubungan dengan keselamatan pengendara.
                    Anda mungkin sering mendengar berbagai kecelakaan lalu lintas yang disebabkan oleh rem, misalnya karena rem blong. Hal ini menunjukkan betapa bahayanya jika kampas rem tidak berjalan sesuai fungsinya.
                    </p>
                </div>
                <div className= "w-1/2">
                    {" "}
                    <Image
                        src="/kampasremmotor.jpeg"
                        alt="kampasremmotor"
                        className="w-full"
                        width={200}
                        height={400}
                        priority
                    />
                </div>
            </div>

            <div className= "w-full flex justify-center">
                <p className= "font-mono text-xl font-bold">
                    Filter Motor
                </p>
            </div>
            <div className="relative flex space-x-8 place-items-center justify-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
                <div className= "w-1/3 flex flex-col">
                    <p className= "font-mono text-md">
                    Filter motor berfungsi untuk melakukan penyaringan dari udara di luar supaya udara kotor atau debu tidak masuk ke bagian mesin motor.
                    Jika tidak diganti secara rutin, maka bisa membuat suara berisik ketika mesin berfungsi. Hal ini dikarenakan bisa saja terdapat kotoran atau debu yang menyangkut, sehingga sirkulasi menjadi tidak baik.
                    Penggantian secara berkala diperlukan sehingga mesin motor dapat berfungsi dengan maksimal tanpa adanya gangguan dari debu luar.
                    Itulah spare part motor Anda yang perlu diketahui. Sangat penting untuk selalu menjaga kualitas berbagai onderdil tersebut sehingga performa dan keamanan Anda ketika berkendara akan terjaga.
                    </p>
                </div>
                <div className= "w-1/2">
                    {" "}
                    <Image
                        src="/filtermotor.webp"
                        alt="filtermotor"
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
