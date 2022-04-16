 import imgBurger from"../assets/image/imgBurger.png"
 import imgChicken from"../assets/image/imgChicken.png"
 import imgPizzaa from"../assets/image/imgPizzaa.png"

const Product = () => {
    return ( 
        <div className="w-[1200px] mx-auto grid grid-cols-2 gap-5 text-white font-Fredoka">
            <div className="col-span-1 relative flex ">
                <div className="bg-[rgba(0,0,0,0.84)] rounded-[10px]">
                  <img className="w-[590px] h-[460px] rounded-[10px] opacity-50" src={imgBurger}/>
                </div>
                 <div className="absolute text-xl pt-5 pl-5">TRY IT TODAY! <p className="text-[40px]">NEW BURGER</p> </div>
            </div>
            <div className="col-span-1 grid grid-rows-2 gap-5">
            <div className="row-span-1 flex relative">
                <div className="bg-[rgba(0,0,0,0.84)] rounded-[10px]">
                   <img className="h-[220px] w-[590px] rounded-[10px] opacity-30" src={imgChicken}/>
                </div>
                <div className="absolute text-xl pt-5 pl-5">TRY IT TODAY! <p className="text-[40px]">NEW BURGER</p> </div>
            </div>
            <div className="row-span-1 flex relative">
                <div className="bg-[rgba(0,0,0,0.84)] rounded-[10px]">
                 <img className="h-[220px] w-[590px] rounded-[10px] opacity-30" src={imgPizzaa}/>
                </div>
                <div className="absolute text-xl pt-5 pl-5">TRY IT TODAY! <p className="text-[40px]">NEW BURGER</p> </div>
            </div>
            </div>
        </div>
     );
}
 
export default Product;