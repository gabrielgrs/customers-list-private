import styled, { keyframes } from 'styled-components'

const fromLeft = keyframes`
  from {
    transform: translateX(-100vh);
  }

  to {
    transform: translateX(0);
  }
`

const fromRight = keyframes`
  from {
    transform: translateX(100vh);
  }

  to {
    transform: translateX(0);
  }
`

const Item = styled.div`
  border: solid 1px #ccc;
  padding: 32px;
`

const Grid = styled.div`
  display: grid;
  overflow-x: hidden;

  grid-template-columns: 1fr;
  gap: 16px;

  > :nth-child(odd) {
    animation: ${fromLeft} 1s;
  }

  > :nth-child(even) {
    animation: ${fromRight} 1s;
  }
`

type Customer = {
  id: string
  login: string
}

const Index = ({ items }: { items: Customer[] }) => {
  return (
    <Grid>
      {items.map((customer) => (
        <Item key={customer.id}>{customer.login}</Item>
      ))}
    </Grid>
  )
}

export default Index
