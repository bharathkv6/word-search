import { GridType } from "../../types/types";
import "./Grid.css";

const Grid: React.FC<GridType> = (props) => {
  const { rows, columns, wordBoard, activeCoordinates } = props;
  const generateGrid = (rows: number, columns: number) => {
    return new Array(rows).fill(0).map((_, row) => (
      <div className="row" key={row}>
        {new Array(columns).fill(0).map((_, col) => (
          <div
            className={`column ${
              activeCoordinates.get(`${row}_${col}`) ? "active" : ""
            }`}
            key={col}
          >
            {wordBoard[row][col]}
          </div>
        ))}
      </div>
    ));
  };

  return <div>{generateGrid(rows, columns)}</div>;
};

export default Grid;
