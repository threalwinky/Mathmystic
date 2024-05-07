import * as React from "react";
import { isDragActive, motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import { Cart, Fight, Forum, LogOut, Profile, Purchase, Setting, Store, Study, User } from "./MenuItemIcon";


const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const logOut = () => {
  // console.log(isGuest)
  if (localStorage.getItem('user') == 'guest') return
  console.log(213)
  localStorage.removeItem('user')
  localStorage.removeItem('userAvatar')
  localStorage.removeItem('userName')
  localStorage.clear()
  window.location.href = '/'
 
  localStorage.setItem('lg', "Đăng xuất thành công")
}



export const Navigation = ({ scrolled, setOpen, isGuest }) => (
  <div>
    <a onClick={() => { setOpen() }} className={`${scrolled == true ? "right-10 top-4" : "right-10 top-9"}  absolute`}>

      <svg fill="currentColor"
        viewBox="0 0 24 24"
        height="1em"
        width="1em"
        className='icons'
        fontSize={40} >
        <path
          fill="currentColor"
          d="M6.225 4.811a1 1 0 00-1.414 1.414L10.586 12 4.81 17.775a1 1 0 101.414 1.414L12 13.414l5.775 5.775a1 1 0 001.414-1.414L13.414 12l5.775-5.775a1 1 0 00-1.414-1.414L12 10.586 6.225 4.81z"
        />
      </svg>
    </a>
    <motion.ul variants={variants}

      className="p-[1rem] absolute top-[5rem] w-[18rem]"
    >

      {isGuest ?
        <div>
          {itemIds2.map(i => (
            <MenuItem i={i} key={i} name={name2[i]} Icon={icons2[i]} link={links2[i]} />
          ))}
          {isGuest ? "" : <a onClick={logOut}>
            <MenuItem i={9} name={"Log Out"} Icon={LogOut} />
          </a>}
        </div>
        :

        <div>
          {itemIds.map(i => (
            <MenuItem i={i} key={i} name={name[i]} Icon={icons[i]} link={links[i]} />
          ))}
          {isGuest ? "" : <a onClick={logOut}>
            <MenuItem i={9} name={"Log Out"} Icon={LogOut} />
          </a>}
        </div>

      }
    </motion.ul>
  </div>

);

const itemIds2 = [0, 1, 2, 3, 4, 5];
const name2 = ["Sign in", "Study space", "Store", "Cart", "Purchase", "Forum"]
const icons2 = [User,  Study, Store, Cart, Purchase, Forum]
const links2 = ["/signin",  "/study", "store", "cart", "purchase", "forum"]

const itemIds = [0, 1, 2, 3, 4, 5, 6, 7];
const name = ["Profile", "Study space", "Store", "Cart", "Purchase", "Games", "Forum", "Setting"]
const icons = [ Profile, Study, Store, Cart, Purchase, Fight, Forum, Setting]
const links = [ "/profile", "/study", "store", "cart", "purchase", "fight", "forum", "setting"]