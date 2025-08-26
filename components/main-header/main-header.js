import Link from "next/link";
import Image from "next/image";



import logoImg from '@/assets/logo.png';
import classes from './main-header.module.css'
import MainHeaderBackground from "./main-header-background";
import NavLink from "./nav-link";



// this Image is providing a optimized version of image to use in brower with features like lazy loading and priority property setup 


export default function MainHeader(){
    return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image src={logoImg} alt="A plate with food on it" priority />
          NextLevel Food
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}