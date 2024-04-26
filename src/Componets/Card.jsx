const Card = ({colSpan,rowSpan,smColSpan,smRowSpan,content,title}) => {
  const baseClassNames = "full_day bg-[#31363F] w-full h-full rounded-lg ";
  const classNames = [
    baseClassNames,
    `${colSpan}`,
    `${rowSpan}`,
    `${smColSpan}`,
    `${smRowSpan}`,
  ].join("  ");
  return (
    <div
      className={classNames}
      
    >
      <div className="text-white font-bold">{title}</div>
      {content ? content : null}
    </div>
  );
};
 
export default Card;