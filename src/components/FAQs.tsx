import React, { useState } from 'react';
import question from "../assets/question.jpg"

const faqs = [
    {
        question: 'Does QiloDB support large datasets?',
        answer: 'Yes! QiloDB is optimized to handle 100,000+ records per table without performance drops, making it suitable for serious data tasks in lightweight environments.',
    },
    {
        question: 'Is the data stored securely?',
        answer: 'Yes. All data in QiloDB is encrypted before being saved to disk, ensuring your information stays private and tamper-resistant.',
    },
    {
        question: 'Is there any GUI?',
        answer: 'No. QiloDB is intentionally built as a CLI-only tool to keep it fast, focused, and scriptable. It’s designed for power users and terminal lovers.',
    },
    {
        question: 'What does transaction support mean?',
        answer: 'QiloDB supports commit and rollback commands. This means you can make multiple changes and choose to either save them permanently or discard them before committing.',
    },
    {
        question: 'Does QiloDB support SQL syntax?',
        answer: 'No. QiloDB uses its own simplified command syntax for learning and ease of use. It\'s intuitive and well-documented in the Command Reference section.',
    },
    {
        question: 'Is QiloDB open-source? Can I contribute?',
        answer: 'Yes! QiloDB is open-source. You’re welcome to contribute, suggest features, or report issues. Check the GitHub repository for contribution guidelines.',
    },
];

const FAQs: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id='faqs' className="max-w-screen mx-auto px-4 py-12 bg-white flex flex-col items-center text-black">
            <h2 className="text-3xl font-bold text-center mb-8  sm:text-5xl">Frequently Asked Questions</h2>
            <div className='flex flex-col md:flex-row gap-x-8 flex-wrap justify-center items-center'>
                <div className='w-auto flex justify-center'>
                    <img src={question} alt="" className='h-80 min-w-max' />
                </div>
                <div className="space-y-4 max-w-3xl flex flex-col h-auto justify-center">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <div
                                key={index}
                                className="border border-gray-200 rounded-lg overflow-hidden shadow-sm transition-all"
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full flex justify-between items-center px-6 py-4 text-left bg-neutral-200 hover:bg-gray-50 transition"
                                >
                                    <span className="font-medium text-gray-800">{faq.question}</span>

                                    {/* Plus to X icon */}
                                    <span
                                        className={`relative w-3 h-3 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''
                                            }`}
                                    >
                                        <span
                                            className="absolute inset-0 bg-gray-800 w-[2px] h-full mx-auto"
                                            aria-hidden="true"
                                        />
                                        <span
                                            className={`absolute inset-0 bg-gray-800 h-[2px] w-full my-auto transition-opacity duration-300`}
                                            aria-hidden="true"
                                        />
                                    </span>
                                </button>

                                {/* Answer with transition */}
                                <div
                                    className={`px-6 overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-40 py-4 opacity-100' : 'max-h-0 py-0 opacity-0'
                                        } bg-gray-50 text-gray-700`}
                                >
                                    {faq.answer}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FAQs;
