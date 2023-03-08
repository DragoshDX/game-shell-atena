export const StatsList = ({ played = 0, won = 0, lost = 0 }) => {
  return (
    <ul className="border rounded-md shadow">
      <li>{played}</li>
      <li>{won}</li>
      <li>{lost}</li>
    </ul>
  );
};
