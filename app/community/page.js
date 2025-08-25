import Link from "next/link";

export default function CommunityPage(){
    return <main>
        <h1>This is Community page</h1>
        <p>
            <Link href='/meals'>Go To Meals</Link>
            <Link href='/'>Go to Home</Link>
        </p>
    </main>
}