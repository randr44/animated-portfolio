import './index.scss';

import Sidebar from '../Sidebar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
  <div className='App'> {/**main wrapper of application */}
    <Sidebar/>
    <div className='page'> {/**wrapper for all pages */}
    <span className='tags top-tags'>&lt;body&gt;</span>

    <Outlet /> {/**this is where the pages will be rendered */}
    
    <span className='tags bottom-tags'>
    &lt;/body&gt;
    <br />
    
    <span className='bottom-tag-html'>&lt;/html&gt;</span>
    </span>
    </div>
  </div>
  )
}

export default Layout
