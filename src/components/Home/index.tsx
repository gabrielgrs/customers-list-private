import styled from 'styled-components'
import { List, Grid } from 'react-feather'
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

type Grid = 'list' | 'cards'

type Props = {
  customersList: Customer[]
  gridType: Grid
  onChangeGridType: (gridType: Grid) => void
  onLoadMore: () => void
}

const Home = ({ customersList, gridType, onChangeGridType, onLoadMore }: Props) => {
  return (
    <Main>
      <Actions>
        <ActionButton onClick={() => onChangeGridType('cards')}>
          <Grid size={20} />
        </ActionButton>
        <ActionButton onClick={() => onChangeGridType('list')}>
          <List size={20} />
        </ActionButton>
      </Actions>
      {gridType === 'cards' && <ListView items={customersList} />}
      {gridType === 'list' && <GridView items={customersList} />}
      <LoadMoreButton onClick={onLoadMore}>Load More</LoadMoreButton>
    </Main>
  )
}

export default Home
