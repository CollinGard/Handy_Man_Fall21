import { Navbar, NavItem, Icon } from 'react-materialize';
 
const MainNavbar = () => {
  return (
    <>
      <Navbar 
        alignLinks="right"
        brand={<a className="brand-logo" href="/">Worker List</a>}
        id="mobile-nav"
        menuIcon={<Icon>menu</Icon>}
        options={{
          draggable: true,
          edge: 'left',
          inDuration: 250,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          outDuration: 200,
          preventScrolling: true
        }}
        >
        <NavItem href="/about">
          About
        </NavItem>
        <NavItem href="/workers">
          Workers
        </NavItem>
      </Navbar>
    </>
  )
}

export default MainNavbar;