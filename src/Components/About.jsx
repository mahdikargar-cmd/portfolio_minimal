import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import deadline from '../img/deadline.jpg';
import safarinoo from '../img/safarinoo.png';
import echo from '../img/echo.png';
import { FaGithub } from 'react-icons/fa';

const About = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center py-8 px-4 sm:px-6 lg:px-8">
            {/* بخش معرفی */}
            <div className="w-full max-w-4xl text-center bg-white shadow-lg rounded-lg p-6 sm:p-8 mb-10 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">درباره من</h2>
                <p className="text-base sm:text-lg text-gray-600 mb-4 leading-relaxed">
                    سلام! من مهدی کارگرم، یه توسعه‌دهنده فول‌استک وب که عاشق خلق چیزهای جدیده. تو دوران کارشناسی، با
                    چالش‌های پروژه‌های دانشگاهی، نه‌تنها فرانت‌اند رو حسابی یاد گرفتم، بلکه به دنیای بک‌اند هم سرک
                    کشیدم و مهارت‌هامو گسترش دادم.
                </p>
                <p className="text-base sm:text-lg text-gray-600 mb-4 leading-relaxed">
                    بعد از فارغ‌التحصیلی، مثل خیلی‌ها، خدمت سربازی رو گذروندم و حالا با انرژی و انگیزه زیاد دنبال
                    فرصت‌هایی هستم که بتونم توشون تجربه کسب کنم و استعدادها و علایقم رو شکوفا کنم.
                </p>
                <p className="text-base sm:text-lg text-gray-600 mb-4 leading-relaxed">
                    نمونه‌کارهای من تو گیت‌هاب منتظرن تا داستان کدهامو بهت نشون بدن. اگه دوست داشتی، بیا یه نگاهی
                    بنداز و باهم در مورد پروژه‌های هیجان‌انگیز گپ بزنیم!
                </p>
                <p className="text-base sm:text-lg font-semibold text-blue-600 mt-6">
                    از وقتی که گذاشتی، خیلی ممنونم!
                </p>
                <Link
                    href="https://github.com/your-github"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center mt-4 text-blue-600 hover:text-blue-800 transition duration-300 text-base sm:text-lg"
                >
                    <FaGithub size={20} className="ml-2" />
                    گیت‌هاب من رو ببین
                </Link>
            </div>

            {/* بخش نمونه‌کارها */}
            <div className="w-full max-w-4xl">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 text-center mb-6 sm:mb-8">نمونه‌کارها</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    <Link
                        href="https://your-deadline-project-link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition duration-300"
                    >
                        <Image
                            src={deadline}
                            alt="پروژه ددلاین"
                            width={300}
                            height={200}
                            className="rounded-md mb-4 object-cover w-full h-40 sm:h-48"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        <h4 className="text-base sm:text-lg font-semibold text-gray-800">ددلاین</h4>
                        <p className="text-sm sm:text-base text-gray-600">پلتفرمی برای مدیریت زمان و پروژه‌ها</p>
                    </Link>
                    <Link
                        href="https://your-safarinu-project-link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition duration-300"
                    >
                        <Image
                            src={safarinoo}
                            alt="پروژه سفرینو"
                            width={300}
                            height={200}
                            className="rounded-md mb-4 object-cover w-full h-40 sm:h-48"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        <h4 className="text-base sm:text-lg font-semibold text-gray-800">سفرینو</h4>
                        <p className="text-sm sm:text-base text-gray-600">اپلیکیشن رزرو سفر و برنامه‌ریزی</p>
                    </Link>
                    <Link
                        href="https://your-eco-project-link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition duration-300"
                    >
                        <Image
                            src={echo}
                            alt="پروژه پزواک"
                            width={300}
                            height={200}
                            className="rounded-md mb-4 object-cover w-full h-40 sm:h-48"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        <h4 className="text-base sm:text-lg font-semibold text-gray-800">پزواک</h4>
                        <p className="text-sm sm:text-base text-gray-600">شبکه‌ای برای اشتراک‌گذاری پایدار</p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default About;