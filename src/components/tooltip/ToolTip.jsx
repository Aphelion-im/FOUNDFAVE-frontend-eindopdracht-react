import './ToolTip.css';
import { FaInfoCircle } from 'react-icons/fa';

export default function ToolTip({ info }) {
  return (
    <>
      <span className="tooltip" data-info={info}>
        <FaInfoCircle className="tooltipicon" />
      </span>
    </>
  );
}
