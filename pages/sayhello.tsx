import { useEffect, useState } from "react"
import type { HelloResponse } from "./api/hello"

const SayHello = () => {
    const defaultData: HelloResponse = {name: ''}
    const [data, setData] = useState(defaultData)

    useEffect(() => {
        fetch('api/hello')
            .then((res) => {
                return res.json()
            })
            .then((profile) => {
                console.log(profile)
                setData(profile)
            })
    }, [])

    return <div>hello {data.name}</div>
}

export default SayHello