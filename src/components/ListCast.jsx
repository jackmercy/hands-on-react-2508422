import { useState, useEffect } from 'react';

export default () => {
  const [cast, setCast] = useState([]);

  const fetchCast = async () => {
    const resp = await fetch('cast.json');

    setCast(await resp.json());
  };

  useEffect(() => {
    fetchCast();
  });

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(auto-fit, minmax(90px, 1fr))`,
        gap: `1rem`,
        marginBottom: `1rem`,
      }}
    >
      {cast.map((member) => (
        <div key={member.id} data-tooltip={member.name}>
          <a>
            <img src={`images/${member.slug}_tn.svg`} alt={member.name} />
          </a>
          <div>{member.name} </div>
        </div>
      ))}
    </div>
  );
};
