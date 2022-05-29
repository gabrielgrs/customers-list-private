import { NextPage } from 'next'
import { useCallback, useEffect, useState } from 'react'
import { useToasts } from 'react-toast-notifications'
import { getCustomers } from '../api/customers'
import Home from '../components/Home'

type Customer = {
  id: string
  login: string
}

const ITEMS_PER_PAGE = 10

const Index: NextPage = () => {
  const [gridStyle, setGridStyle] = useState<'list' | 'cards'>('list')
  const [customers, setCustomers] = useState<Customer[]>([])
  const [page, setPage] = useState(ITEMS_PER_PAGE)
  const { addToast } = useToasts()

  const onFetch = useCallback(
    async (itemsPerPage: number) => {
      try {
        const data = await getCustomers(itemsPerPage)
        setCustomers(data)
      } catch {
        addToast('Failed to fetch data', { appearance: 'error' })
      }
    },
    [addToast]
  )

  useEffect(() => {
    onFetch(page)
  }, [onFetch, page])

  return (
    <Home
      customersList={customers}
      gridType={gridStyle}
      onChangeGridType={setGridStyle}
      onLoadMore={() => setPage((p) => p + ITEMS_PER_PAGE)}
    />
  )
}

export default Index
