import React, { FC, useRef, useEffect } from 'react';
import styles from './TableInfoCardDonut.module.scss';

interface TableInfoCardDonutProps {
  value?: number
}

const TableInfoCardDonut: FC<TableInfoCardDonutProps> = ({
  value
}) => {
  const diagram = useRef<SVGCircleElement>(null);

  useEffect(() => {
    const radius = parseInt(diagram?.current?.getAttribute('r') ?? '')
    const perimeter = 2 * 3.14 * radius;
    var fillAmount = perimeter - perimeter * (value ?? 0) / 100;

    diagram?.current?.setAttribute("stroke-dasharray", perimeter.toString());
    diagram?.current?.setAttribute("stroke-dashoffset", fillAmount.toString());
  }, [])

  return (
    <div className={styles.TableInfoCardDonut}>
      <svg width="46" height="46" xmlns="http://www.w3.org/2000/svg">
        <g>
          <circle
            cx="50%" cy="50%" r="20"
            strokeWidth="3"
            fill="transparent" stroke="var(--basic_background)" />
          <circle className={styles.TableInfoCardDonut__diagram}
            cx="50%" cy="50%" r="20"
            strokeLinejoin="round"
            strokeWidth="3"
            fill="transparent" stroke="var(--brand_primary_2)"
            ref={diagram}
          />
        </g>
        <text fill="var(--brand_primary_2)"
          letterSpacing="0.2" fontWeight="500" fontSize="12"
          x="50%" y="50%"
          dominantBaseline="middle" textAnchor="middle"
        >{value}%</text>
      </svg>
    </div >
  );
}

export default TableInfoCardDonut;
