import React from 'react';
import Link from 'next/link';
import {FaGithub, FaInstagram, FaLinkedin} from 'react-icons/fa';
import {SiGmail} from "react-icons/si";

const Home = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center">
            {/* بخش معرفی */}
            <div className="px-12 pt-36 flex flex-col md:flex-row gap-6 items-center">
                <div className="text-center md:text-right">
                    <h1 className="text-4xl text-right  font-bold text-gray-800">سلام، من مهدی کارگر </h1>
                    <h2 className="text-2xl text-right pt-4 text-gray-700">توسعه‌دهنده فول‌استک وب با اشتیاق به خلق راه‌حل‌های
                        خلاقانه</h2>
                    <p className="text-lg pt-4 text-right text-gray-600 max-w-md">از قدیم و ندیم گفتن که تجربه هر برنامه نویسی رو از تو گیت هابش باید فهمید پس اگه دوس داشتین یه سر
                        بزنین</p>
                    <p className="text-lg text-right pt-4 text-gray-600 max-w-md">
                        در پروژه‌های متن‌بازم در گیت‌هاب و تجربیات حرفه‌ای‌ام در لینکدین، داستان کدهای من رو ببینید و
                        باهم در ارتباط باشیم!
                    </p>
                </div>
                <div className="flex justify-center">
                    <button
                        className="bg-white drop-shadow text-black px-6 py-3 rounded-lg   duration-300"
                    >
                        دانلود رزومه
                    </button>
                </div>
            </div>

            {/* آیکون‌های شبکه‌های اجتماعی */}
            <div className="flex gap-6 justify-center mt-8">
                <Link href="https://www.linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={32} className="text-blue-600 hover:text-blue-800 transition duration-300"/>
                </Link>
                <Link href="https://www.instagram.com/your-instagram" target="_blank" rel="noopener noreferrer">
                    <FaInstagram size={32} className="text-pink-600 hover:text-pink-800 transition duration-300"/>
                </Link>
                <Link href="https://github.com/your-github" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={32} className="text-gray-800 hover:text-gray-900 transition duration-300"/>
                </Link>
                <Link href={""} className={''}>
                    <SiGmail size={32} className="text-red-400  hover:text-red-600 transition duration-300"/>

                </Link>
            </div>
        </div>
    );
};

export default Home;