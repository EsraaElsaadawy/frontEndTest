'use client';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      title: 'تدرب بلا حدود',
      questions: [
        {
          question: 'ما هو اشتراك تدرب بلا حدود؟',
          answer:
            'تعلم مع أكثر من 1000 دورة تدريبية في مختلف المجالات ناطقة باللغة العربية، لك باشتراك واحد فقط، شاهدها الآن عبر تدرب بلا حدود وأحصل على شهادة إتمام للدورة التدريبية فور الانتهاء منها، مئات من الشهادات التعليمية بانتظارك. شاهد جميع الدورات المضافة حديثًا دون مصاريف إضافية. تعلم مع أكثر من 1000 دورة تدريبية في مختلف المجالات ناطقة باللغة العربية، لك باشتراك واحد فقط، شاهدها الآن عبر تدرب بلا حدود وأحصل على شهادة إتمام للدورة التدريبية فور الانتهاء منها، مئات من الشهادات التعليمية.',
        },
        {
          question: 'هل يمكنني مشاهدة كل الدورات باشتراك تدرب بلا حدود؟',
          answer: '',
        },
        {
          question: 'كيف اشتراك في نظام تدرب بلا حدود؟',
          answer: '',
        },
      ]
    },
    {
      title: 'نظام الدفع',
      questions: [
        {
          question: 'ما هو اشتراك تدرب بلا حدود؟',
          answer: '',
        },
        {
          question: 'هل يمكنني مشاهدة كل الدورات باشتراك تدرب بلا حدود؟',
          answer: '',
        },
        {
          question: 'كيف اشتراك في نظام تدرب بلا حدود؟',
          answer: '',
        },
      ]
    },
    {
      title: 'الشهادات التدريبية',
      questions: [
        {
          question: 'ما هو اشتراك تدرب بلا حدود؟',
          answer: '',
        },
        {
          question: 'هل يمكنني مشاهدة كل الدورات باشتراك تدرب بلا حدود؟',
          answer: '',
        },
        {
          question: 'كيف اشتراك في نظام تدرب بلا حدود؟',
          answer: '',
        },
      ]
    }
  ];

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="container mb-5" dir="rtl">
      <div>
        <p className="fw-bold fs-1 mb-4 text-white">أكثر الأسئلة الشائعة</p>
        {faqs.map((faqContainer, index) => (
          <div key={index}>
            <p className="fs-4 my-3 text-white">{faqContainer.title}</p>
            <div className="d-flex flex-column gap-3">
              {faqContainer.questions.map((faq, index) => (
                <div key={index} className="bg-dark bg-opacity-25 rounded">
                  <div
                    className="d-flex justify-content-between align-items-start p-4"
                    onClick={() => toggleIndex(index)}
                    style={{ cursor: 'pointer' }}
                  >
                    <p className="text-white fw-bold fs-5 mb-0">{faq.question}</p>
                    <i
                      className={`bi bi-chevron-down text-white fs-4 transition-all ${openIndex === index ? 'rotate-180' : ''
                        }`}
                    ></i>
                  </div>

                  <div
                    className="px-4 pb-3 text-white"
                    style={{
                      maxHeight: openIndex === index ? '300px' : '0px',
                      opacity: openIndex === index ? 1 : 0,
                      overflow: 'hidden',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    {faq.answer}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
