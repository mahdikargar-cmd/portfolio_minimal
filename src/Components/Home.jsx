import React from "react";
import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center">
      {/* بخش معرفی */}
      <div className="px-12 pt-36 flex flex-col md:flex-row gap-6 items-center">
        <div className="text-center md:text-right">
          <h1 className="text-4xl text-right  font-bold text-gray-800">
            سلام، من مهدی کارگر{" "}
          </h1>
          <h2 className="text-2xl text-right pt-4 text-gray-700">
            توسعه‌دهنده فول‌استک وب با اشتیاق به خلق راه‌حل‌های خلاقانه
          </h2>
          <p className="text-lg pt-4 text-right text-gray-600 max-w-md">
            از قدیم و ندیم گفتن که تجربه هر برنامه نویسی رو از تو گیت هابش باید
            فهمید پس اگه دوس داشتین یه سر بزنین
          </p>
          <p className="text-lg text-right pt-4 text-gray-600 max-w-md">
            در پروژه‌های متن‌بازم در گیت‌هاب و تجربیات حرفه‌ای‌ام در لینکدین،
            داستان کدهای من رو ببینید و باهم در ارتباط باشیم!
          </p>
        </div>
        <div className="flex justify-center">
          <a href="../files/Mycv.pdf" download>
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg">
              دانلود رزومه
            </button>
          </a>
        </div>
      </div>

      {/* آیکون‌های شبکه‌های اجتماعی */}
      <div className="flex gap-6 justify-center mt-8">
        <Link
          href="https://www.linkedin.com/in/mahdi-kargar-dev?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin
            size={32}
            className="text-blue-600 hover:text-blue-800 transition duration-300"
          />
        </Link>
        <Link
          href="https://www.instagram.com/mahdikargar.dev?igsh=cHpmd29mYjdlNmtt&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram
            size={32}
            className="text-pink-600 hover:text-pink-800 transition duration-300"
          />
        </Link>
        <Link
          href="https://github.com/mahdikargar-cmd"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub
            size={32}
            className="text-gray-800 hover:text-gray-900 transition duration-300"
          />
        </Link>
        {/* آیکون Gmail */}
        <a href="mailto:mahdikargar.com@gmail.com">
          <SiGmail
            size={32}
            className="text-red-400 hover:text-red-600 transition duration-300"
          />
        </a>
      </div>
    </div>
  );
};

export default Home;
