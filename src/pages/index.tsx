import type { NextPage } from 'next'
import { useCallback, useEffect, useState } from 'react'
import { useToasts } from 'react-toast-notifications'
import styled from 'styled-components'
import { List, Grid } from 'react-feather'
import { getCustomers } from '../api/customers'
import GridView from './GridView'
import ListView from './ListView'

const Main = styled.main`
  padding: 32px 3%;
  display: flex;
  flex-direction: column;
  gap: 32px;
`

const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 16px;
`

const LoadMoreButton = styled.div``

const ActionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid 1px #ccc;
  background: none;
  color: ${({ theme }) => theme.colors.black};
  height: 24px;
  width: 24px;
  border-radius: 3px;
`

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
    <Main>
      <Actions>
        <ActionButton onClick={() => setGridStyle('cards')}>
          <Grid size={20} />
        </ActionButton>
        <ActionButton onClick={() => setGridStyle('list')}>
          <List size={20} />
        </ActionButton>
      </Actions>
      {gridStyle === 'cards' && <ListView items={customers} />}
      {gridStyle === 'list' && <GridView items={customers} />}
      <LoadMoreButton onClick={() => setPage((p) => p + ITEMS_PER_PAGE)}>Load More</LoadMoreButton>
    </Main>
  )
}

export default Index
