import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
    const frontendSkills = [
        { skill: 'HTML', level: 'پیشرفته' },
        { skill: 'CSS', level: 'پیشرفته' },
        { skill: 'JavaScript', level: 'متوسط' },
        { skill: 'React.js', level: 'متوسط' },
        { skill: 'RESTful API', level: 'متوسط' },
        { skill: 'Tailwind Framework', level: 'متوسط' },
        { skill: 'Axios', level: 'متوسط' },
        { skill: 'Bootstrap Framework', level: 'متوسط' },
        { skill: 'Next.js', level: 'متوسط' },
        { skill: 'Context API', level: 'متوسط' },
        { skill: 'Responsive Design', level: 'متوسط' },
        { skill: 'TypeScript', level: 'مقدماتی' },
    ];

    const backendSkills = [
        { skill: 'Java', level: 'متوسط' },
        { skill: 'Java Core', level: 'متوسط' },
        { skill: 'Spring Boot Framework', level: 'متوسط' },
        { skill: 'Spring Security', level: 'متوسط' },
        { skill: 'Spring Data JPA', level: 'متوسط' },
        { skill: 'Hibernate', level: 'متوسط' },
        { skill: 'Gradle', level: 'متوسط' },
        { skill: 'Maven', level: 'متوسط' },
        { skill: 'Express.js', level: 'متوسط' },
        { skill: 'Node.js', level: 'متوسط' },
        { skill: 'N-Layered Architecture', level: 'متوسط' },
        { skill: 'Clean Architecture', level: 'متوسط' },
        { skill: 'MVC Architecture', level: 'متوسط' },
        { skill: 'REST API', level: 'متوسط' },
        { skill: 'System Analysis and Design', level: 'متوسط' },
        { skill: 'MongoDB', level: 'متوسط' },
        { skill: 'PostgreSQL', level: 'متوسط' },
        { skill: 'MySQL', level: 'متوسط' },
        { skill: 'Git', level: 'متوسط' },
        { skill: 'OOP Principles', level: 'متوسط' },
        { skill: 'Docker', level: 'متوسط' },
        { skill: 'Agile & Scrum', level: 'متوسط' },
    ];

    const otherSkills = [
        { skill: 'Linux', level: 'مقدماتی' },
        { skill: 'Postman API', level: 'متوسط' },
        { skill: 'WordPress', level: 'متوسط' },
        { skill: 'ICDL', level: 'متوسط' },
        { skill: 'Python', level: 'متوسط' },
    ];

    // انیمیشن برای کارت‌ها
    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
    };

    // انیمیشن برای آیتم‌های لیست
    const itemVariants = {
        hidden: { opacity: 0, x: -10 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: 'easeOut' } },
        hover: { scale: 1.02, transition: { duration: 0.2 } },
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center py-6 px-3 sm:px-6 lg:px-8">
            <h2 className="text-xl sm:text-3xl font-bold text-gray-800 mb-6 sm:mb-10">مهارت‌های من</h2>

            <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {/* بخش مهارت‌های فرانت‌اند */}
                <motion.div
                    className="bg-white shadow-md rounded-lg p-3 sm:p-6"
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <h3 className="text-base sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-4 text-center">فرانت‌اند</h3>
                    <ul className="grid grid-cols-2 gap-2 sm:grid-cols-1">
                        {frontendSkills.map((item, index) => (
                            <motion.li
                                key={index}
                                className="flex justify-between items-center text-xs sm:text-base text-gray-600 py-1 sm:py-2 hover:bg-gray-100 rounded-md px-1 sm:px-2 transition-colors duration-200"
                                variants={itemVariants}
                                initial="hidden"
                                animate="visible"
                                whileHover="hover"
                            >
                                <span>{item.skill}</span>
                                <span
                                    className={`font-medium ${
                                        item.level === 'پیشرفته'
                                            ? 'text-green-600'
                                            : item.level === 'متوسط'
                                                ? 'text-blue-600'
                                                : 'text-yellow-600'
                                    }`}
                                >
                  {item.level}
                </span>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>

                {/* بخش مهارت‌های بک‌اند */}
                <motion.div
                    className="bg-white shadow-md rounded-lg p-3 sm:p-6"
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.1 }}
                >
                    <h3 className="text-base sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-4 text-center">بک‌اند</h3>
                    <ul className="grid grid-cols-2 gap-2 sm:grid-cols-1">
                        {backendSkills.map((item, index) => (
                            <motion.li
                                key={index}
                                className="flex justify-between items-center text-xs sm:text-base text-gray-600 py-1 sm:py-2 hover:bg-gray-100 rounded-md px-1 sm:px-2 transition-colors duration-200"
                                variants={itemVariants}
                                initial="hidden"
                                animate="visible"
                                whileHover="hover"
                            >
                                <span>{item.skill}</span>
                                <span
                                    className={`font-medium ${
                                        item.level === 'پیشرفته'
                                            ? 'text-green-600'
                                            : item.level === 'متوسط'
                                                ? 'text-blue-600'
                                                : 'text-yellow-600'
                                    }`}
                                >
                  {item.level}
                </span>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>

                {/* بخش مهارت‌های دیگر */}
                <motion.div
                    className="bg-white shadow-md rounded-lg p-3 sm:p-6"
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.2 }}
                >
                    <h3 className="text-base sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-4 text-center">سایر مهارت‌ها</h3>
                    <ul className="grid grid-cols-2 gap-2 sm:grid-cols-1">
                        {otherSkills.map((item, index) => (
                            <motion.li
                                key={index}
                                className="flex justify-between items-center text-xs sm:text-base text-gray-600 py-1 sm:py-2 hover:bg-gray-100 rounded-md px-1 sm:px-2 transition-colors duration-200"
                                variants={itemVariants}
                                initial="hidden"
                                animate="visible"
                                whileHover="hover"
                            >
                                <span>{item.skill}</span>
                                <span
                                    className={`font-medium ${
                                        item.level === 'پیشرفته'
                                            ? 'text-green-600'
                                            : item.level === 'متوسط'
                                                ? 'text-blue-600'
                                                : 'text-yellow-600'
                                    }`}
                                >
                  {item.level}
                </span>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </div>
    );
};

export default Experience;