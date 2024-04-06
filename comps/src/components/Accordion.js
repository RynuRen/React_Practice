import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

function Accordion({ items }) {
  const [expandedIndex, setExpendedIndex] = useState(0);

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    // conditional rendering
    // const content = isExpanded && <div>{item.content}</div>;
    const icon = (
      <span>{isExpanded ? <GoChevronDown /> : <GoChevronLeft />}</span>
    );

    return (
      <div key={item.id}>
        <div onClick={() => setExpendedIndex(index)}>
          {icon}
          {item.label}
        </div>
        {isExpanded && <div>{item.content}</div>}
      </div>
    );
  });

  return <div>{renderedItems}</div>;
}

export default Accordion;
