import { FaInfoCircle } from 'react-icons/fa';
import './ToolTip.css';

export default function ToolTip({ info }) {
  return (
    <>
      <span className="tooltip" data-info={info}>
        <FaInfoCircle className="tooltipicon" />
      </span>
    </>
  );
}
