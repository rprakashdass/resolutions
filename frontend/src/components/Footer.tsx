// import { FaInstagram } from "react-icons/fa";
// import { SiGmail } from "react-icons/si";

const Contacts = () => {
    return (
        <div id="contact" className="bg-[#f7f1de] text-black">
            {/* Rotaract Club Section */}
            <div className="px-6 py-8 md:py-12 text-center">
                <h2 className="font-bold text-2xl md:text-3xl text-gray-800">
                    Proudly Supported by the Rotaract Club of SIET
                </h2>
                <p className="mt-2 text-lg text-gray-600">
                    Connecting communities, fostering innovation, and building a better tomorrow.
                </p>
                <p className="mt-2 text-md text-gray-600">
                    For any campus-based events or support, feel free to reach out to us!
                </p>

                {/* Social Links */}
                <div className="flex justify-center items-center gap-6 mt-6">
                    <a
                        href="https://instagram.com/rotaractsiet"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Rotaract SIET Instagram"
                        className="hover:scale-110 transition-transform duration-200"
                    >
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/800px-Instagram_icon.png"
                            alt="Instagram Icon"
                            className="w-10 h-10"
                        />
                    </a>
                    <a
                        href="mailto:rotaractsiet2425@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Email Rotaract SIET"
                        className="hover:scale-110 transition-transform duration-200"
                    >
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg"
                            alt="Gmail Icon"
                            className="w-10 h-10"
                        />
                    </a>
                </div>
            </div>

            {/* Contact Section */}
            <div className="flex flex-col justify-center items-center gap-6 px-6 py-10 text-center">
                <h1 className="font-bold text-3xl text-gray-800">Contact</h1>

                <div className="grid gap-6 text-lg text-gray-600 md:grid-cols-2">
                    <div>
                        <p className="font-semibold">Technical Support:</p>
                        <a href="tel:+91 7010047730" className="text-black-600 hover:text-blue-400 ">
                            Rtr. Prakash Dass, +91 70100 47730

                        </a>
                        <br />
                        <a href="tel:+91 6381667303" className="text-black-600 hover:text-blue-400 ">
                         Rtr. Yuvan Krishna, +91 6381667303

                        </a>
                    </div>
                    <div>
                        <p className="font-semibold">Event Support:</p>
                        <a href="tel:+91 9943140800" className="text-black-600 hover:text-blue-400 ">
                            Rtr. Subhiksha, 9943140800
                            
                        </a>
                       <br />
                        <a href="tel:+91 6383957601" className="text-black-600 hover:text-blue-400 ">
                        Rtr. Raga Shruthi,6383957601
                            
                        </a>
                    </div>
                </div>

                <div className="mt-6 text-md text-gray-600">
                    <p>
                        Created with ❤️ by{' '}
                        <a
                            className="text-blue-600 hover:text-blue-400 underline"
                            href="https://www.rprakashdass.in"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Prakash Dass R
                        </a>
                        {' '} || All Avenue Chair, Rotaract SIET
                    </p>
                </div>
            </div>

            {/* Footer */}
            <div className="bg-[#f7f1de] py-6">
                <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-center">
                    <p className="text-lg text-gray-600">
                        For more updates, follow Rotaract SIET:
                    </p>
                    <a
                        href="https://instagram.com/rotaractsiet"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram page of Rotaract SIET"
                        className="flex items-center gap-2 text-lg text-blue-600 hover:text-blue-400 transition-all"
                    >
                        Instagram
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/800px-Instagram_icon.png"
                            alt="Instagram Icon"
                            className="w-6 h-6"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Contacts;
