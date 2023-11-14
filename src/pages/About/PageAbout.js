import NavBar from '../../components/navbar';
import Header from './Header';
function About() {
    return (
      <div>
        <NavBar
          home="Home"
          sobre="- Sobre"
          contactos="Contactos"/>
        <Header/>
      </div>
    );
  }
  export default About;