import React, { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

const dataArr = [
    {
        id: 1,
        title: "How does the kachabazar work?",
        details: "Yes. You can cancel your subscription anytime. Your subscription will continue to be active until the end of your current term (month or year) but it will not auto-renew. Unless you delete your account manually, your account and all data will be deleted 60 days from the day your subscription becomes inactive."
    },
    {
        id: 2,
        title: "How does the kachabazar work?",
        details: "Yes. You can cancel your subscription anytime. Your subscription will continue to be active until the end of your current term (month or year) but it will not auto-renew. Unless you delete your account manually, your account and all data will be deleted 60 days from the day your subscription becomes inactive."
    },
    {
        id: 3,
        title: "How does the kachabazar work?",
        details: "Yes. You can cancel your subscription anytime. Your subscription will continue to be active until the end of your current term (month or year) but it will not auto-renew. Unless you delete your account manually, your account and all data will be deleted 60 days from the day your subscription becomes inactive."
    },
]

const AccordingLayout = () => {
    const [openAccording, setOpenAccording] = useState(false);
    return (
        <div className='space-y-2'>
            {
                dataArr.map((data, index) => <div>
                    <div onClick={() => setOpenAccording(index)} className='bg-indigo-50 px-5 py-3 rounded flex justify-between items-center'>
                        <p>{data.title}</p>
                        <FiChevronDown />
                    </div>

                    {
                        openAccording === index && <div className='p-3'>
                            <p>{data.details}</p>
                        </div>
                    }
                </div>)
            }
        </div>
    );
};

export default AccordingLayout;