import { NextApiRequest, NextApiResponse } from "next"

export type HelloResponse = {
    name: string
}

export default (req: NextApiRequest, res: NextApiResponse<HelloResponse>) => {
    res.status(200).json({name: 'Yuya Yano'})
}