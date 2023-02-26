

import Feedback from "./Feedback/Feedback";

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        padding: 70,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Feedback />
    </div>
  );
};
