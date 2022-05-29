import { render, fireEvent } from '../../../utils/test'
import Button from './index'

describe('<Button />', () => {
  it('Should render button', () => {
    const { getByRole } = render(<Button>Button</Button>)
    const element = getByRole('button', { name: /button/i })
    expect(element).toBeInTheDocument()
  })

  it('Should button be clicked', () => {
    const onClick = jest.fn()

    const { getByRole } = render(<Button onClick={onClick}>Button</Button>)
    const element = getByRole('button', { name: /button/i })
    fireEvent.click(element)
    expect(onClick).toBeCalled()
  })
})
