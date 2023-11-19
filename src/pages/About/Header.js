import ImgbackgroudTop from '../../components/HOMESite.png';
import ButtonMaster from '../../components/buttonMaster';
import './Header.css';
import Icon1 from '../../components/icons/ethics.png';
import Icon2 from '../../components/icons/quality.png';
import Icon3 from '../../components/icons/icons8-handshake-64.png';
import ImgBlueLogo from '../../components/imgLogo/Logo-Blue.png';

import Card from '../../components/card';
import FooterContain from '../../components/footerContain';

import ImgCera from '../../components/img/ServiceDepilacaoCera.jpg';
import ImgLaser from '../../components/img/ServiceDepilacaoLaser.jpg';
import ImgManicure from '../../components/img/ServiceManicure.jpg';
import ImgSobrancelhas from '../../components/img/ServiceSobrancelhas.jpg';


function Header() {
    return (
      <div>
        <img src={ImgbackgroudTop}  className='ImgbackgroudTop' alt="Image the background" />
        <div className='CampoTop'>
            <h1>STUDIO<br/>PALOMEQUE</h1>
            <p>Studio de estetica</p>
            <ButtonMaster
              value= "Marcação"
              nameclass= "buttonNormal"
              linck= "https://zappysoftware.com/m/studiopalomeque#find"
            />
        </div>
        <div className='CampoCondulta'>
          <div className='TabCondulta'></div>
          <div className='ContainerCondulta'>
            <div>
                <img src={Icon3} alt="Icons" />
                <h5>CONFIANÇA</h5>
                <p>
                  Conquistamos confiança através de serviços de qualidade e atendimento personalizado, garantindo satisfação e fidelidade dos clientes.
                </p>
            </div>
            <div>
                <img src={Icon1} alt="Icons" />
                <h5>ÉTICA</h5>
                <p>
                  Comprometemo-nos com integridade, transparência e tratamento justo, proporcionando um serviço profissional e respeitoso a cada cliente.
                </p>
            </div>
            <div>
                <img src={Icon2} alt="Icons" />
                <h5>CREDIBILIDADE</h5>
                <p>
                  Nossa equipe qualificada, práticas higiênicas rigorosas e o uso de produtos de qualidade refletem nosso compromisso com a confiança e satisfação dos clientes.
                </p>
            </div>
          </div>
        </div>
        
        <div className='CampoSection'>
          <h2>Descubra o Seu Refúgio<br/>de Beleza e Bem-Estar</h2>
          <div className='CampoHeaderInfo row'>
            <Card
                Img = {ImgCera}
                titulo = 'Depilação a Cera'
                texto = 'Reparação verniz em gel, unhas em gel manicure, Gel na tips'
            />
            <Card
                Img = {ImgLaser}
                titulo = 'Depilação a Laser'
                texto = 'Reparação verniz em gel, unhas em gel manicure, Gel na tips'
            />
            <Card
                Img = {ImgManicure}
                titulo = 'Manicure e Pedicure de Luxo'
                texto = 'Reparação verniz em gel, unhas em gel manicure, Gel na tips'
            />
            <Card
                Img = {ImgSobrancelhas}
                titulo = 'Sobrancelhas Perfeitas'
                texto = 'Reparação verniz em gel, unhas em gel manicure, Gel na tips'
            />
            
          </div>
        </div>
        
        <div className='CampDirectionsServ'>
          <div className='CampMulherInfo'>
            <img src={ImgBlueLogo} className='LogoIconfooter'  alt="icons Check"/>
            <br/>
            <h3>Descubra mais sobre o<br/>que fazemos.</h3><br/>
            <ButtonMaster
              value= "Meu trabalho"
              nameclass= "buttonOutline"
              linck= "https://zappysoftware.com/m/studiopalomeque#find"
            />
          </div>
        </div>
          <div className='Campfeedback row'>
            <div className='feedback col-md-12'>
              <p>Eu fiquei super satisfeita! Fiz unha em gel e a depilação das axilas. Estava super insegura por ter sido minha primeira experiência com depilação aqui em Portugal. Recomendo com certeza!</p>
              <h3>Elizete Lopes, Porto</h3>
            </div>
            <div className='feedback col-md-12'>
              <p>Atendimento super simpático, ambiente super agradável e de bom aspecto, serviço ótimo e pontual.</p>
              <h3>Beatriz Simões, Porto</h3>
            </div>
            <div className='feedback col-md-12'>
              <p>Adorei o serviço🤩
                Pessoal muito profissional, simpático e bem educado.
                Fiz o alisamento orgânico e corte bordado e estou muito satisfeita 💯
                Obrigada.
              </p>
              <h3>Santa Lazda, Porto</h3>
            </div><div className='feedback col-md-12'>
              <p>Coloquei mega  com a Cris adorei o serviço e sem falar no corte e madeixas que a Andréia faz bom super indico esse salão ótimos profissionais as unhas 💅🏻 também são maravilhosas 😘😘</p>
              <h3>Nadia pereira, Porto</h3>
            </div>
          </div>
          <FooterContain/>
      </div>
      
    );
  }

export default Header;