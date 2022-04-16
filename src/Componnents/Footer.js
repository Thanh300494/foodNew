import imgLogo from"../assets/image/imgLogoFooter.png"

const Footer = () => {
    return ( 
        <div className="bg-bgFooter mt-5 grid grid-cols-4 px-[30px] py-[50px]">
            <div className="col-span-2">
                <img className="w-[411px] h-[130px]" src={imgLogo}/>
                <p className="w-[538px] mt-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet consequuntur corporis cupiditate eaque eius enim, eos et fuga iure necessitatibus nesciunt nisi placeat porro quo quos velit, voluptatem?</p>
            </div>
            <div className="col-span-1">
                <ul>
                    <li>Newsroom</li>
                    <li>Apple Leadership</li>
                    <li>Career Opportunities</li>
                    <li>Investors</li>
                    <li>Ethics & Compliance</li>
                    <li>Events</li>
                    <li>Contact Apple</li>
                </ul>
            </div>
            <div className="col-span-1">
                <ul>
                    <li>Newsroom</li>
                    <li>Apple Leadership</li>
                    <li>Career Opportunities</li>
                    <li>Investors</li>
                    <li>Ethics & Compliance</li>
                    <li>Events</li>
                    <li>Contact Apple</li>
                </ul>
            </div>
        </div>
     );
}
 
export default Footer;