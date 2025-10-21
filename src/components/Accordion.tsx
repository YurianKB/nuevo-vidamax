interface AccordionProps {
  items: AccordionItem[];
  parentId?: string;
  className?: string;
  variant?: "footer" | "main";
}

export const Accordion = ({
  items,
  parentId = "accordionFlushExample",
  className = "",
  variant
}: AccordionProps) => {
  const buttonClass = variant === "footer" ? "text-small text-green" : "text-bold text-green";
  const bodyClass = variant === "footer" ? "text-small text-gray" : "text-normal";

  return (
    <div className={`accordion accordion-flush ${className}`} id={parentId}>
      {items.map((item) => (
        <div className="accordion-item mb-3" key={item.id}>
          <p className="accordion-header">
            <button
              className={`accordion-button collapsed ${buttonClass}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#${item.id}`}
              aria-expanded="false"
              aria-controls={item.id}
            >
              {item.title}
            </button>
          </p>
          <div
            id={item.id}
            className="accordion-collapse collapse"
            data-bs-parent={`#${parentId}`}
          >
            <div className={`accordion-body ${bodyClass}`}>{item.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
};