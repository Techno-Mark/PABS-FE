"use client"
import React, { useState, useRef, useEffect } from "react";
import Button from "@/app/component/common/button/button";
import TitleSection from '@/app/component/common/title/title';

interface ContactFormProps {
    title: string;
    subtitle: string;
    desc: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ title, subtitle, desc }) => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        mobileNumber: "",
        companyName: "",
        message: "",
        subscription: false
    });

    const [errors, setErrors] = useState({
        fullName: "",
        email: "",
        mobileNumber: "",
        companyName: "",
        message: ""
    });

    const formRef = useRef<HTMLDivElement>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value, type } = e.target;
        setErrors(prev => ({ ...prev, [id]: "" }));

        if (type === "checkbox") {
            const isChecked = (e.target as HTMLInputElement).checked; 
            setFormData(prev => ({ ...prev, [id]: isChecked }));
        } else if (id === "mobileNumber") {
            const filteredValue = value.replace(/\D/g, "").slice(0, 10);
            setFormData(prev => ({ ...prev, [id]: filteredValue }));
        } else {
            setFormData(prev => ({ ...prev, [id]: value }));
        }
    };

    const validate = () => {
        const newErrors: any = {};
        if (!formData.fullName) newErrors.fullName = "Full name is required";
        if (!formData.email) newErrors.email = "E-mail is required";
        if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid e-mail address";
        if (!formData.mobileNumber) newErrors.mobileNumber = "Mobile Number is required";
        else if (!/^\d{10}$/.test(formData.mobileNumber)) newErrors.mobileNumber = "Mobile Number must be exactly 10 digits";
        if (!formData.companyName) newErrors.companyName = "Company name is required";
        if (formData.message.length > 400) newErrors.message = "Message cannot exceed 400 characters";
        return newErrors;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        alert("Form submitted successfully!");
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (formRef.current && !formRef.current.contains(event.target as Node)) {
                setErrors({ fullName: "", email: "", mobileNumber: "", companyName: "", message: "" });
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [formRef]);

    return (
        <section className="py-20">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row items-center max-w-6xl gap-12 mx-auto">
                    <div className="flex-1">
                        <TitleSection title={title} />
                        <p className="text-lg xl:text-3xl font-bold text-black/50">{subtitle}</p>
                        <p className="text-2xl xl:text-4xl font-bold text-black [&_*]:text-[#0078C8]" dangerouslySetInnerHTML={{ __html: desc }} />
                    </div>
                    <div className="flex-1 p-12 rounded-lg bg-[#08243F] max-w-xl" ref={formRef}>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <div className="p-3 border border-white/60 rounded-sm">
                                    <label htmlFor="fullName" className="block text-sm font-normal text-white">Full Name</label>
                                    <input type="text" id="fullName" className="w-full text-white outline-none" value={formData.fullName} onChange={handleChange} />
                                </div>
                                {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
                            </div>
                            
                            <div>
                                <div className="p-3 border border-white/60 rounded-sm">
                                    <label htmlFor="email" className="block text-sm font-normal text-white">E-mail</label>
                                    <input type="email" id="email" className="w-full text-white outline-none" value={formData.email} onChange={handleChange} />
                                </div>
                                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                            </div>

                            <div>
                                <div className="p-3 border border-white/60 rounded-sm">
                                    <label htmlFor="mobileNumber" className="block text-sm font-normal text-white">Mobile Number</label>
                                    <input type="tel" id="mobileNumber" className="w-full text-white outline-none" maxLength={10} value={formData.mobileNumber} onChange={handleChange} />
                                </div>
                                {errors.mobileNumber && <p className="text-red-500 text-sm">{errors.mobileNumber}</p>}
                            </div>

                            <div>
                                <div className="p-3 border border-white/60 rounded-sm">
                                    <label htmlFor="companyName" className="block text-sm font-normal text-white">Company Name</label>
                                    <input type="text" id="companyName" className="w-full text-white outline-none" value={formData.companyName} onChange={handleChange} />
                                </div>
                                {errors.companyName && <p className="text-red-500 text-sm">{errors.companyName}</p>}
                            </div>

                            <div>
                                <div className="p-3 border border-white/60 rounded-sm">
                                    <label htmlFor="message" className="block text-sm font-normal text-white">Your Message</label>
                                    <textarea id="message" rows={1} className="w-full text-white outline-none" value={formData.message} onChange={handleChange} />
                                </div>
                                {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                            </div>

                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="subscription"
                                    checked={formData.subscription}
                                    onChange={handleChange}
                                    className="w-5 h-5 text-blue-100 border-white rounded focus:ring-blue-500"
                                />
                                <label htmlFor="subscription" className="ml-2 text-sm font-normal text-white">
                                    Subscription
                                </label>
                            </div>

                            <p className="text-base font-bold text-[var(--primary-yellow)]">Your data is secure with us</p>    
                            <Button text="Request a Call Back" className="!w-full !py-3 justify-center text-2xl"/>
                            <Button text="Privacy" href="/home" className="bg-transparent !p-0 !font-normal !text-base underline"/>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
