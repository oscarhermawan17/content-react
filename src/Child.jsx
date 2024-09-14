import { useEffect } from "react";

function Child({ values }) {

  useEffect(() => {
    // console.log('re-render', values)
  }, [values])

  return (
    <div style={{ margin: `20px auto`, width: 200, border: `solid 1px black `, padding: 20}}>
      Children Component
    </div>
  );
}

export default Child