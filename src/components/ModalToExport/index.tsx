import "./styles.css";
import ImageAndWriting from "../ImageAndWriting";
import Button from "../Button";

const ModalToExport = ({
  label,
  text,
  paragraph,
  fontSize,
  showTwoButtons,
  background,
  color,
  onClick,
  onClickSecondButton,
  textSecondButton,
  backgroundSecondButton,
  colorSecondButton,
}: {
  label: string;
  fontSize: string;
  paragraph?: any;
  showTwoButtons: boolean;
  text: string;
  background?: string;
  color?: string;
  textSecondButton?: string;
  backgroundSecondButton?: string;
  colorSecondButton?: string;
  onClick?: () => void;
  onClickSecondButton?: () => void;
}) => {
  return (
    <div className="modalCard-export">
      <div className="containerCardModal-export">
        <div className="containerModal-export">
          <ImageAndWriting
            icon="check_circle"
            label={label}
            color="tertiary"
            fontSize={fontSize}
          />
          <p>{paragraph}</p>
        </div>
        <div className="modalButtons">
          {showTwoButtons ? (
            <>
              <Button
                text={text}
                background={background}
                color={color}
                onClick={onClick}
              />
              <Button
                text={textSecondButton}
                background={backgroundSecondButton}
                color={colorSecondButton}
                onClick={onClickSecondButton}
              />
            </>
          ) : (
            <Button
              text={text}
              background={background}
              color={color}
              onClick={onClick}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ModalToExport;
