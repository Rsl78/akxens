import { NIKE_ITEMS } from "../data";
import MegaMenu from "./MegaMenu";
const Navbar = () => {
    return (
      <div className="flex justify-between items-center px-20 py-5">
        <div>
          <img
            src={""}
            alt=""
            width={100}
            height={100}
          />
        </div>
        <div className="flex gap-5">
          {NIKE_ITEMS.map((item) => (
            <div key={item.category} className="group">
              <a
                href={item.href}
                className="text-lg font-semibold py-1 hover:border-b-[3px] border-black"
              >
                {item.category}
                {item.product && <MegaMenu product={item.product} />}
              </a>
            </div>
          ))}
        </div>

      </div>
    );
};

export default Navbar;