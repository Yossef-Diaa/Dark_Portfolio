'use client'

const HeroButton = () => {
    const file = "./assets/Yossef-Diaaeldin-Mohamed-CV.pdf";

    const HandleDownloading = (url) => {
        const fileName = url.split("/").pop();
        const aTag = document.createElement("a");
        aTag.href = url;
        aTag.setAttribute("download", fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
      };
    return ( 
        <button
                    className=""
                    onClick={() => HandleDownloading(file)}
                >
                    <div className="text-white bg-purple-950 py-2 px-6 md:rounded-full self-center md:self-start hover:text-purple-200 flex hover:translate-x-1 hover:hover:scale-[103%]">

                    Download CV
                    <svg
                        className="w-6 h-6 pl-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 15v2a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-2m-8 1V4m0 12-4-4m4 4 4-4"
                        />
                    </svg>
                    </div>
                </button>
     );
}
 
export default HeroButton;