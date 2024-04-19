import './App.css';
import { Card } from './components/card';
import { Stage, Layer, Rect, Circle } from 'react-konva';

function App() {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="space-y-6">
        <Card title={'Titulo incredibile'} content={'conteudo incredibile'} />
      </div>
      <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Rect width={50} height={50} fill="red" />
        <Circle x={200} y={200} stroke="black" radius={50} />
      </Layer>
    </Stage>
    </div>
  );
}
 
export default App;
