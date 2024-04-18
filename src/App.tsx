import './App.css';
import { Card } from './components/card';

function App() {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="space-y-6">
        <Card title={'Titulo incredibile'} content={'conteudo incredibile'} />
      </div>
    </div>
  );
}
 
export default App;
