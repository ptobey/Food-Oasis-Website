import React, { useEffect, useRef } from 'react';
import { Control, DomUtil, Map } from 'leaflet';
//import "MapPage.css";

interface LegendProps {
  map: Map;
  legendItems: { color: string; label: string }[];
}

const Legend: React.FC<LegendProps> = ({ map, legendItems }) => {
  const legendRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const legendControl = new Control({ position: 'bottomright' });

    legendControl.onAdd = () => {
      const container = DomUtil.create('div', 'legend');

      legendItems.forEach((item) => {
        const legendItem = DomUtil.create('div', 'legend-item');
        const colorBox = DomUtil.create('span', 'color-box');
        colorBox.style.backgroundColor = item.color;
        legendItem.appendChild(colorBox);
        legendItem.appendChild(DomUtil.create('span', '', item.label));
        container.appendChild(legendItem);
      });

      return container;
    };

    legendControl.addTo(map);

    return () => {
      legendControl.remove();
    };
  }, [map, legendItems]);

  return null;
};

export default Legend;