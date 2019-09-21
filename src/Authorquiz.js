import React from 'react';

import './App.css';

import { Collapse,
  Button,CardBody, Card,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
class App extends React.Component {
    constructor(props) {
      super(props);
  
      this.Navbartoggle = this.Navbartoggle.bind(this);
      this.toggle = this.toggle.bind(this);
      this.state = { collapse: false };
      this.state = {
        isOpen: false
      };
    }
    Navbartoggle = () =>  {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
    toggle = () =>  {
      this.setState(state => ({ collapse: !state.collapse }));
    }
    render() {
    return (
      <React.Fragment>
      <div>
          <Navbar color="" light expand="md" className="navbar">
            <NavbarBrand href="/">reactstrap</NavbarBrand>
            <NavbarToggler onClick={this.Navbartoggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/components/">Components</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Options
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      Option 1
                    </DropdownItem>
                    <DropdownItem>
                      Option 2
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                      Reset
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
          </Navbar>
       
        
       </div>
       <div>
       <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Toggle</Button>
         <Collapse isOpen={this.state.collapse}>
           <Card>
             <CardBody>
             Anim pariatur cliche reprehenderit,
              enim eiusmod high life accusamus terry richardson ad squid. Nihil
              anim keffiyeh helvetica, craft beer labore wes anderson cred
              nesciunt sapiente ea proident.
             </CardBody>
           </Card>
         </Collapse>
         </div>
       </React.Fragment>
    
    );
  }
  }

  export default App;