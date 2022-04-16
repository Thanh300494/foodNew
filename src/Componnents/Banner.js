import imgBanner from"../assets/image/imgBanner.png"

const Banner = () => {
    return ( 
        <div className="bg-bgBanner grid grid-cols-2 my-5 px-[30px]  items-center">
            <div className="leading-none">
                <div className="font-Fredoka text-[100px]">SPECIAL <p className="text-[64px]">BURGER</p></div>
                <button className="bg-brown text-yellow text-xl rounded-lg mt-5 px-12 py-[12px]">Order Now!</button>
            </div>
            <div className="">
                 <img src={imgBanner}/>
            </div>
        </div>
     );
}
 
export default Banner;