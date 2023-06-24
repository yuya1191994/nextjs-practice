import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const LinkPage = () => {
    const router = useRouter()

    const onClick = () => {
        router.push("/ssr")
    }
    
    return (
        <div>
            <Link href="/ssr">
                Go to SSR
            </Link>
            <br />
            <Link href="/ssr?query=hoge">
                Go to SSR with queryString
            </Link>
            <br />
            <Link href={{
                pathname: "/ssr",
                query: {
                    query: "hoge"
                }
            }}>
                Go to SSR with queryObject
            </Link>
            <br />
            <Link href="/ssr">
                <button>Go to SSR with button</button>
            </Link>
            <br />
            <button onClick={onClick}>Go to SSR with onClickTrigger</button>
            <br />
            <button onClick={router.reload}>reload</button>
            <br />
            <button onClick={router.back}>back</button>
        </div>
        
    )
}

export default LinkPage