import React, { useState } from 'react'
import { MailIcon, PhoneIcon, MapPinIcon } from 'lucide-react'
import axios from 'axios';

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject:"",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);


    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    access_key: "d9976922-c41d-440a-adbd-624e9448ec3c",
                    ...formData
                }),
            });

            const result = await response.json();
            if (result.success) {
                alert("Message sent successfully!");
                setFormData({ name: "", email: "",subject: "", message: "" });
                setIsSubmitting(false);
            } else {
                alert("Failed to send message. Please try again.");
            }
        } catch (error) {
            console.log("Sending email failed: ", error);
            // alert("An error occurred. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <section id='contact' className='min-h-screen flex items-center py-20 bg-gray-50'>
            <div className='container mx-auto px-4'>
                <div className='text-center mb-16'>
                    <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>Get In Touch</h2>
                    <div className='w-24 h-1 bg-gradient-to-r from-[#06C4C5] to-[#2F77F6] mx-auto'></div>
                    <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
                        Have a project in mind or want to collaborate? Feel free to reach
                        out to me using the form below or through my contact information.
                    </p>
                </div>
                <div className="flex flex-col lg:flex-row gap-12 ">
                    <div className="lg:w-1/3">
                        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                            <h3 className="text-xl font-semibold text-gray-900 mb-6">
                                Contact Information
                            </h3>
                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="bg-blue-50 p-3 rounded-full mr-4">
                                        <MailIcon size={20} className="text-blue-500" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-900">Email</h4>
                                        <a
                                            href="mailto:hello@example.com"
                                            className="text-gray-500 hover:underline"
                                        >
                                            simonlephotojr@gmail.com
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="bg-blue-50 p-3 rounded-full mr-4">
                                        <PhoneIcon size={20} className="text-blue-500" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-900">Phone</h4>
                                        <a
                                            href="tel:+11234567890"
                                            className="text-gray-500 hover:underline"
                                        >
                                            +27 (071) 313-2387
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="bg-blue-50 p-3 rounded-full mr-4">
                                        <MapPinIcon size={20} className="text-blue-500" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-900">Location</h4>
                                        <p className="text-gray-500">
                                            Benoni, Gauteng
                                            <br />
                                            South Africa
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-2/3">
                        <form className="bg-white p-6 rounded-lg shadow-md border border-gray-200" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-gray-700 font-medium mb-2"
                                    >
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Your name"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2F77F6] focus:border-gray-200 outline-none transition"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-gray-700 font-medium mb-2"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Your email"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2F77F6] focus:border-gray-200 outline-none transition"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div className="mb-6">
                                <label
                                    htmlFor="subject"
                                    className="block text-gray-700 font-medium mb-2"
                                >
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    placeholder="Subject"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2F77F6] focus:border-gray-200 outline-none transition"
                                    required
                                    value={formData.subject}
                                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                />
                            </div>
                            <div className="mb-6">
                                <label
                                    htmlFor="message"
                                    className="block text-gray-700 font-medium mb-2"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    placeholder="Your message"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2F77F6] focus:border-gray-200 outline-none transition resize-none"
                                    required
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="px-6 py-3 bg-gradient-to-r from-[#06C4C5] to-[#2F77F6] text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}