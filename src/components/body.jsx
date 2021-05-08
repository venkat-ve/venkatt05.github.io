import FirstFold from './firstfold';
import Footer from './footer';
import Header from './header';

export default function Body(){
 return (<div className="App">
      <Header />
      <div className="main-wrap">
        <FirstFold />
      </div>
      <Footer/>
    </div>);
}