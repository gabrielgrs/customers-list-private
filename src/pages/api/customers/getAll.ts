import { NextApiRequest, NextApiResponse } from 'next'

const request = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { itemsPerPage } = req.query
    const BASE_URL = 'https://api.github.com/users'
    const response = await fetch(`${BASE_URL}?since=1&per_page=${itemsPerPage}`)
    const data = await response.json()
    return res.status(200).json(data)
  } catch {
    return res.status(500).json({ message: 'Failed to request customers' })
  }
}

export default request
