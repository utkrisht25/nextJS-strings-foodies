import Link from "next/link";
import Image from "next/image";



import logoImg from '@/assets/logo.png';
import classes from './main-header.module.css'



// this Image is providing a optimized version of image to use in brower with features like lazy loading and priority property setup 


export default function MainHeader(){
    return <header className={classes.header}>
        <Link className={classes.logo} href='/'>
           {/* <img src={logoImg.src} alt=" a plate with food on it"  /> */}
           <Image src={logoImg} alt='a plate with food on it.' priority />
           NextLevel Food
        </Link>
        <nav className={classes.nav}>
            <ul>    
                <li>
                    <Link href="/meals">Browse Meals</Link>
                </li>
                <li>
                    <Link href="/community">Foodies Community</Link>
                </li>
            </ul>
        </nav>
    </header>
}