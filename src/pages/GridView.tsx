import styled, { keyframes } from 'styled-components'

const appear = keyframes`
  from {
    transform: scale(0);
    opacity: 0;
  }

  to {
    transform: scale(1);
    opacity: 1;
  }
`

const Item = styled.div`
  border: solid 1px #ccc;
  padding: 32px;
  animation: ${appear} 1s;
`

const Grid = styled.div`
  display: grid;
  overflow-x: hidden;

  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
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
