import Container from 'react-bootstrap/esm/Container'
import Sidebar from './Sidebar'
import Heading from './Heading'
import Stack from 'react-bootstrap/esm/Stack'

interface BodyProps {
  sidebar : boolean
  children: JSX.Element[] | JSX.Element
  heading?: JSX.Element
}

export default function Body({ sidebar, children, heading }: BodyProps) {
  return (
    <Container>
      {heading && <Heading/>}
      <Stack direction='horizontal'>
        { sidebar && <Sidebar />}
        <div className= 'child-container'>
          { children }
        </div>
      </Stack>
    </Container>
  )
}