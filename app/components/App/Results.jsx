import React from 'react';

const Results = ({highScore}) => (
  <table className="center navy">
    <thead>
    <tr>
      <th className="w2 tc">#</th>
      <th className="w2 tc">Turns</th>
      <th className="w5 tc">Name</th>
    </tr>
    </thead>
    <tbody>
    {highScore.map((s, i) => (
      <tr key={i}>
        <td className="tc">0</td>
        <td className="tc">{s.turns}</td>
        <td className="tc">{s.name}</td>
      </tr>
    ))}
    </tbody>
  </table>
);

Results.propTypes = {
  highScore: React.PropTypes.array.isRequired
};

export default Results;
