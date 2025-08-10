import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import deadline from '../img/deadline.jpg';
import safarinoo from '../img/safarinoo.png';
import echo from '../img/echo.png';
import { FaGithub } from 'react-icons/fa';

const About = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex flex-col items-center py-8 px-4 sm:px-6 lg:px-8">
            {/* بخش معرفی */}
            <div className="w-full max-w-4xl text-center bg-white/80 shadow-xl rounded-2xl p-6 sm:p-8 mb-10 sm:mb-12 backdrop-blur-sm animate-fadeIn">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-800 mb-6 relative">
                    درباره من
                    <span className="block w-16 h-1 bg-blue-500 mx-auto mt-2 rounded-full"></span>
                </h2>
                <p className="text-base sm:text-lg text-gray-600 mb-4 leading-relaxed">
                    سلام! من <span className="font-semibold text-blue-600">مهدی کارگر</span> هستم، توسعه‌دهنده فول‌استک وب
                    که عاشق خلق چیزهای جدیده. تو دوران کارشناسی با پروژه‌های چالش‌برانگیز، هم فرانت‌اند رو یاد گرفتم
                    هم بک‌اند رو تجربه کردم.
                </p>
                <p className="text-base sm:text-lg text-gray-600 mb-4 leading-relaxed">
                    بعد از فارغ‌التحصیلی، خدمت سربازی رو گذروندم و حالا با انرژی و انگیزه بالا دنبال فرصت‌هایی هستم
                    که توشون بتونم رشد کنم و استعداد‌هام رو شکوفا کنم.
                </p>
                <p className="text-base sm:text-lg text-gray-600 mb-4 leading-relaxed">
                    نمونه‌کارهای من تو گیت‌هاب منتظرن تا داستان کدهام رو نشون بدن. اگر دوست داشتی، نگاهی بنداز و با هم
                    درباره پروژه‌های هیجان‌انگیز گپ بزنیم.
                </p>
                <p className="text-base sm:text-lg font-semibold text-blue-600 mt-6">
                    از وقتی که گذاشتی، خیلی ممنونم! 💙
                </p>
                <Link
                    href="https://github.com/your-github"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center mt-4 px-4 py-2 rounded-full bg-blue-500 text-white hover:bg-blue-600
                               transition-all duration-300 shadow-md hover:shadow-lg text-sm sm:text-base"
                >
                    <FaGithub size={20} className="ml-2" />
                    گیت‌هاب من رو ببین
                </Link>
            </div>

            {/* بخش نمونه‌کارها */}
            <div className="w-full max-w-6xl">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 text-center mb-6 sm:mb-8">
                    نمونه‌کارها
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        {
                            href: 'https://your-deadline-project-link',
                            src: deadline,
                            title: 'ددلاین',
                            desc: 'پلتفرمی برای مدیریت زمان و پروژه‌ها'
                        },
                        {
                            href: 'https://your-safarinu-project-link',
                            src: safarinoo,
                            title: 'سفرینو',
                            desc: 'اپلیکیشن رزرو سفر و برنامه‌ریزی'
                        },
                        {
                            href: 'https://your-eco-project-link',
                            src: echo,
                            title: 'پزواک',
                            desc: 'شبکه‌ای برای اشتراک‌گذاری پایدار'
                        }
                    ].map((project, i) => (
                        <Link
                            key={i}
                            href={project.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group bg-white/80 shadow-md rounded-xl p-4 hover:shadow-xl
                                       transition-all duration-300 hover:-translate-y-2 backdrop-blur-sm"
                        >
                            <div className="overflow-hidden rounded-md">
                                <Image
                                    src={project.src}
                                    alt={project.title}
                                    width={300}
                                    height={200}
                                    className="rounded-md mb-4 object-cover w-full h-40 sm:h-48
                                               transition-transform duration-300 group-hover:scale-105"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                />
                            </div>
                            <h4 className="text-base sm:text-lg font-semibold text-gray-800">{project.title}</h4>
                            <p className="text-sm sm:text-base text-gray-600">{project.desc}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;
