import './App.css';
import ButtonHub from './component/UI/ButtonHub';
import Header from './component/Header';
import Form from './component/UI/Form Element/Form';
import MenuLink from './component/UI/MenuLink';
import Logo from './component/UI/Logo';
import MainBlock from './component/blocks/MainBlock';
import RegisterBlock from './component/blocks/RegisterBlock';


function App() {
  return (
    <div className="App">

      <Header headerClass={'header'}>
        <MenuLink>Регистрация</MenuLink>
        <MenuLink>Регистрация</MenuLink>
        <Logo />
        <MenuLink>Регистрация</MenuLink>
        <MenuLink>Регистрация</MenuLink>
      </Header>
      <MainBlock/>
      <RegisterBlock />
    </div>
  );
}

export default App;
