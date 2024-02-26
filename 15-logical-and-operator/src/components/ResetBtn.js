

function ResetBtn({ count, resetCount }) {
  

  return (
    count > 0 && (
      <div>
        <button style={{ backgroundColor: "Darkgrey" }} onClick={resetCount}>
          Reset
        </button>
      </div>
    )
  );
}

export default ResetBtn;

