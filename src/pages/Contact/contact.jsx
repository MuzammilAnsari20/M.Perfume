import React from "react";
import RelatedProduct from '../../components/relatedproduct';
import bgContact from '../../assets/img/contactme.jpg';
import useContactHook from "../../hooks/useContactHook";

function Contact() {

   const {formValue, handleChange, handleSubmit} = useContactHook();

    return (
        <>

            <div className="w-full h-fit mt-10! p-[30px]! bg-center bg-cover bg-no-repeat bg-fixed"
                style={{ backgroundImage: `url(${bgContact})` }}>

                <div className="w-full pt-10! pb-10! flex flex-col items-center justify-center">

                    <h1 className="w-[60%] font-extrabold text-[34px] tracking-[3px]">Contact Me</h1>

                    <br></br>

                    {/* {isSubmited && (
                        <div className="w-full py-2! bg-fuchsia-500 rounded-full">
                            <p className="text-center text-white">Thanks for reaching out my way</p>
                        </div>
                    )}

                    <br></br>
                    <br></br> */}

                    <form className="w-[60%] mx-auto mb-15!" onSubmit={handleSubmit}>

                        <div className="grid md:grid-cols-2 md:gap-6 mb-15!">

                            <div className="relative z-0 w-full mb-5! group">
                                <input type="text" name="first_name" value={formValue.first_name} onChange={handleChange} id="floating_first_name" className="block py-2.5! px-0! w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer" placeholder=" " required />
                                <label htmlFor="floating_first_name" className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">First name</label>
                            </div>

                            <div className="relative z-0 w-full mb-5! group">
                                <input type="text" name="last_name" value={formValue.last_name} onChange={handleChange} id="floating_last_name" className="block py-2.5! px-0! w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer" placeholder=" " required />
                                <label htmlFor="floating_last_name" className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Last name</label>
                            </div>

                        </div>

                        <div className="relative z-0 w-full mb-15! group">

                            <input type="email" name="email" value={formValue.email} onChange={handleChange} id="floating_email" className="block py-2.5! px-0! w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer" placeholder=" " required />
                            <label htmlFor="floating_email" className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Email address</label>

                        </div>

                        <div className="relative z-0 w-full mb-5! group">

                            <label htmlFor="message" className="block mb-5! text-sm font-medium text-heading">Your message</label>
                            <textarea id="message" name="massage" value={formValue.massage} onChange={handleChange} type="text" rows="4" className="px-5! py-5! rounded-[5px] bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full p-3.5 shadow-xs placeholder:text-body" placeholder="Write your thoughts here..."></textarea>

                        </div>
                        <br></br>


                        <button
                            type="submit"
                            className="relative overflow-hidden cursor-pointer rounded-[5px] px-20! py-2! text-white transition-all duration-500 ease-in-out z-10
                                        bg-[linear-gradient(13deg,rgba(212,105,255,1)_0%,rgba(57,0,92,1)_86%)] 
                                        before:content-[''] before:absolute before:inset-0 
                                        before:bg-[linear-gradient(188deg,rgba(212,102,255,1)_0%,rgba(57,0,92,1)_86%)] 
                                        before:opacity-0 hover:before:opacity-100 before:-z-10 before:transition-opacity before:duration-500"
                        >
                            Submit
                        </button>
                    </form>

                    <p className="w-[60%] mx-auto text-[10px] text-[grey] italic">Please describe the specific issue or challenge you are currently facing so I can work through it together.</p>

                </div>

            </div>
            <br />

            <RelatedProduct />
        </>
    )
}

export default Contact;