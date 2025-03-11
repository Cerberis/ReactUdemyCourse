import { useState } from "react";
import "./styles.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  return (
    <div>
      <Accordion />
    </div>
  );
}

function Accordion() {
  return (
    <ul className="accordion content-box">
      {faqs.map((item, index) => (
        <AccordionItem
          key={index}
          index={index + 1}
          title={item.title}
          text={item.text}
        ></AccordionItem>
      ))}
    </ul>
  );

  function AccordionItem({ index, title, text }) {
    const [isOpen, setIsOpen] = useState(false);
    const itemClassnames = isOpen ? " item open" : "item";

    const indexNumberFormatted = index < 10 ? `0${index}` : index;

    function handleToggle() {
      setIsOpen(!isOpen);
    }

    return (
      <div className={itemClassnames} onClick={handleToggle}>
        <p className="number">{indexNumberFormatted}</p>
        <p className="text">{title}</p>
        <p className="icon">{isOpen ? "-" : "+"}</p>
        {isOpen && <div className="content-box">{text}</div>}
      </div>
    );
  }
}
