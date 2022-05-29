import * as S from './styles'
import type * as T from './types'

const Index = ({ items }: { items: T.Customer[] }) => {
  return (
    <S.Grid>
      {items.map((customer) => (
        <S.Item key={customer.id}>{customer.login}</S.Item>
      ))}
    </S.Grid>
  )
}

export default Index
