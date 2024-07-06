const ContactMe = () => {
    return (
        <form class=" w-4/5">
            
        <div className=" flex flex-col mx-auto p-6">
            <h1 className=" text-3xl md:text-5xl font-bold" id="Contacts">Contact Me</h1>
            <div className=" pt-9">
                <h1 className=" text-xl font-semibold text-_PrimeDark">Your Name</h1>
                <input name="from_name" type="text" placeholder="Your Name" className="lg:w-1/2 w-[100%] max-w-xs rounded-lg text-lg py-2 px-2 mt-4 " />
            </div>
            <div className=" pt-9">
                <h1 className=" text-xl font-semibold text-_PrimeDark">Your Email</h1>
                <input name="from_name" type="text" placeholder="Your Email" className="lg:w-1/2 w-[100%] max-w-xs rounded-lg text-lg py-2 px-2 mt-4" />
            </div>
            <div className=" pt-9">
                <h1 className=" text-xl font-semibold text-_PrimeDark">Your Message</h1>
                <textarea name="from_name" placeholder="Your Message" className=" rounded-lg text-lg w-full h-52 my-5 mt-4 px-8 py-4" />
            </div>
            <button class=" bg-purple-950 text-white rounded-full font-semibold py-4 px-8 hover:bg-purple-500 hover:bg-opacity-40 hover:scale-[105%] " disabled>Send</button>
            <h2 className=" text-red-600 p-8">*Form has an error at the moment, please contact with me on whatsapp, facebook or linkedIn</h2>
        </div>
        </form>
    );
}

export default ContactMe;