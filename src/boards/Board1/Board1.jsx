import { ScrollQueue } from '../../components';
import { Clock } from '../Clock/Clock';


import './Board1.css';

export const Board1 = () => {
  return (
    <div className="board">
      <div className="content">
        <div className="lefty">
          <Clock />
        </div>
        <div className="righty">
          <ScrollQueue />
        </div>
      </div>
    </div>
  );
};