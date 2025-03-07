import React from "react";
import styles from "./title.module.css";

interface TitleSectionProps {
  title?: string;
  desc?: string;
  titleClassName?: string;
  descClassName?: string;
  titleTag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  descTag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
  wrapper?: boolean;
}

const TitleSection: React.FC<TitleSectionProps> = ({
  title = "",
  desc = "",
  titleClassName = "",
  descClassName = "",
  titleTag = "h2",
  descTag = "p",
  wrapper = true,
}) => {
  const TitleTag = titleTag;
  const DescTag = descTag;
    const content = (
      <>
        {title && (
          <TitleTag
            className={`text-2xl lg:text-5xl font-black text-[var(--primary-color)] uppercase ${titleClassName}`}
            dangerouslySetInnerHTML={{ __html: title }}
          />
        )}
        {desc && (
          <DescTag
            className={`text-lg font-normal text-black ${descClassName}`}
            dangerouslySetInnerHTML={{ __html: desc }}
          />
        )}
      </>
    );
    return wrapper ? <div className="title-section">{content}</div> : content;
};

export default TitleSection;
