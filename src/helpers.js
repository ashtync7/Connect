
    export function Row({ row, play }) {
        return (
          <tr>
            {row.map((cell, i) => <Cell key={i} value={cell} columnIndex={i} play={play} />)}
          </tr>
        );
      };
      
      export function Cell({ value, columnIndex, play }) {
        let color = 'white';
        if (value === 1) {
          color = 'red';
        } else if (value === 2) {
          color = 'yellow';
        }
    return (
        <div>
          <td>
      <div className="cell" onClick={() => {play(columnIndex)}}>
        <div className={color}></div>
      </div>
    </td>  
        </div>
    );
}

export default Row;