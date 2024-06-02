import React from 'react';
import * as Icon1 from 'react-icons/bi';
import * as Icon2 from 'react-icons/hi2';
import * as Icon3 from 'react-icons/io5';

const contactDetailsdata = [
    {
        icon: "HiChatBubbleLeftRight",
        heading: "Chat with Us",
        description: "Get in touch with us via chat.",
        details: "ritanshushivhare123@gmail.com",
    },
    {
        icon: "BiWorld",
        heading: "Visit Us",
        description: "Drop by and say hello at our office HQ.",
        details: "3/46, Vishwas Khan Rd, Opposite Nehru Enclave, Vishwas Khan, Gomti Nagar, Lucknow",
    },
    {
        icon: "IoCall",
        heading: "Call Us",
        description: "Reach out to us during our office hours.",
        details: "+91 7733954689",
    }
];

const ContactDetails = () => {
    return (
        <div className='flex flex-col gap-6 rounded-xl bg-richblack-800 p-4 lg:p-6'>
            {contactDetailsdata.map((ele, i) => {
                let Icon = Icon1[ele.icon] || Icon2[ele.icon] || Icon3[ele.icon];
                return (
                    <div className='flex flex-col gap-[2px] p-3 text-sm text-richblack-200' key={i}>
                        <div className='flex flex-row items-center gap-3'>
                            <Icon size={25} />
                            <h1 className='text-lg font-semibold text-richblack-5'>{ele?.heading}</h1>
                        </div>
                        <p className='font-medium'>{ele?.description}</p>
                        <p className='font-semibold'>{ele?.details}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default ContactDetails;
