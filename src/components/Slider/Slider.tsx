import { SliderProps } from "../../types/types";

const Slider: React.FC<SliderProps> = (props) => {
  const { min, value, max, label, onChange } = props;
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e);
  };
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input
        id={label}
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={onChangeHandler}
      />
    </div>
  );
};

export default Slider;
