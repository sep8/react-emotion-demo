/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import * as ReactDOMClient from 'react-dom/client'

const styles = css`
  background-color: #d81616;
  color: #333;
`;


const Root = (props) => {
 
  return (
    <div className='root d-flex' css={styles}>
      <div
        style={{ height: 600, width: 800 }}
        className='border'
      >
        Test
      </div>
    </div>
  )
}

const root = ReactDOMClient.createRoot(document.getElementById('root'))
root.render(<Root />)
