import "./footer.css";

const Footer = () => {
  return (
    <div className="footer w-full text-white bg-[#792E7A]">
      <div className="flex items-center footer_links justify-center">
        <div>
          <img src="../images/footer_logo.png" alt="" />
        </div>
        <div className="ml-[206px] gap-[23px] flex flex-1 justify-between items-center">
          {/* footer link 1 */}
          <ul className="flex flex-col gap-[12px]">
            <li>
              <a className="text-nowrap" href="">About Us</a>
            </li>
            <li>
              <a className="text-nowrap" href="">Team</a>
            </li>
            <li>
              <a className="text-nowrap" href="">Contact</a>
            </li>
            <li>
              <a className="text-nowrap" href="">Teens</a>
            </li>
            <li>
              <a className="text-nowrap" href="">Testimonies</a>
            </li>
          </ul>
          {/* footer link 2 */}
          <ul className="flex flex-col gap-[12px]">
            <li>
              <a className="text-nowrap" href="">Resources</a>
            </li>
            <li>
              <a className="text-nowrap" href="">FAQ</a>
            </li>
            <li>
              <a className="text-nowrap" href="">Blog</a>
            </li>
            <li>
              <a className="text-nowrap" href="">Audios</a>
            </li>
            <li>
              <a className="text-nowrap" href="">Videos</a>
            </li>
          </ul>
          {/* footer link 3 */}
          <ul className="flex flex-col gap-[12px]">
            <li>
              <a className="text-nowrap" href="">A Little Extra</a>
            </li>
            <li>
              <a className="text-nowrap" href="">Login</a>
            </li>
            <li>
              <a className="text-nowrap" href="">A Little </a>
            </li>
            <li>
              <a className="text-nowrap" href="">Books</a>
            </li>
            <li>
              <a className="text-nowrap" href="">Facilitators</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="copy-right">
        <p className="text-center py-[26px] mx-[auto]">1999 - 2023 Ivy Pixels. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
