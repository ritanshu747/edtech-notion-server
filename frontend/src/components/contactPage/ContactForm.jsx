import React from "react";
import ContactUsForm from "./ContactUsForm";

const ContactForm = () => {
    return (
        <div className="border border-richblack-600 text-richblack-300 rounded-xl p-7 lg:p-14 flex gap-3 flex-col">
            <h1 className="text-4xl leading-10 font-semibold text-richblack-5">
                Let's Bring Your Ideas to Life!
            </h1>
            <p>
                We're excited to hear from you! Share your thoughts and ideas with us.
            </p>

            <div className="mt-7">
                <ContactUsForm />
            </div>
        </div>
    )
}

export default ContactForm
