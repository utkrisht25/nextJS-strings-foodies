import Link from "next/link";

export default function MealsPage(){
    return <main>
        <h1>This is overall meals page</h1>
        <p>
            <Link href='/meals/share'>share</Link>
        </p>
        <p>
            <Link href='meals/meal-1'>meal-1</Link>
        </p>
         <p>
            <Link href='meals/meal-2'>meal-2</Link>
        </p>
    </main>
}