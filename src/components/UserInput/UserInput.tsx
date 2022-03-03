import { useEffect, useState } from "react";
import Slider from "../Slider/Slider";
import Grid from "../Grid/Grid";
import "./UserInput.css";
import { wordSearch } from "../../utils/util";

const UserInput: React.FC<{ wordBoard: string[][] }> = (props) => {
  const { wordBoard } = props;
  const [rows, setRows] = useState(6);
  const [columns, setColumns] = useState(6);
  const [searchText, setSearchText] = useState("");
  const [activeCoordinates, setActiveCoordinates] = useState<
    Map<string, boolean>
  >(new Map());
  const onDimensionChange = (
    type: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = e.target;
    if (type === "rows") {
      if (+value * 2 < Math.floor(window.innerHeight / 16 - 10)) {
        setRows(Number(value));
      }
    } else {
      if (+value * 2 < Math.floor(window.innerWidth / 16 - 4)) {
        setColumns(Number(value));
      }
    }
  };

  const onSearchTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchText(value);
  };

  useEffect(() => {
    const activeCoordinates = wordSearch(wordBoard, searchText, rows, columns);
    setActiveCoordinates(activeCoordinates);
  }, [searchText, wordBoard, columns, rows]);

  return (
    <div>
      <div className="sliders">
        <Slider
          min={6}
          max={30}
          value={rows}
          label="Rows"
          onChange={onDimensionChange.bind(this, "rows")}
        />
        <Slider
          min={6}
          max={60}
          value={columns}
          label="Columns"
          onChange={onDimensionChange.bind(this, "column")}
        />
      </div>
      <div className="search-box-container">
        <label htmlFor="search-box">Search text: </label>
        <input
          id="search-box"
          type="text"
          value={searchText}
          onChange={onSearchTextChange}
        />
      </div>
      <Grid
        rows={rows}
        columns={columns}
        wordBoard={wordBoard}
        activeCoordinates={activeCoordinates}
      />
    </div>
  );
};

export default UserInput;
