import React from 'react';
import { useSelector } from 'react-redux';
import DagreD3 from './DagreD3React';

function Graph() {
  const graph = useSelector(state => state.d3_graph);

  return (
    <div>
      <DagreD3
        edges={graph.edges}
        nodes={graph.nodes}
        width="300"
        height="100"
      />
    </div>
  );
}

export default Graph;
