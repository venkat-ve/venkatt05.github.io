import FirstFold from './firstfold';
import Header from './header';

export default function Body(){
 return (<div className="App">
      <Header />
      <div className="main-wrap">
        <FirstFold />
      </div>
    </div>);
}