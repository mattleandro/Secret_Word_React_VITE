import PropTypes from "prop-types";
import "./StartScreen.css";

const StartScreen = ({ startGame }) => {
  return (
    <div className="start">
      <h1>Palavra Secreta</h1>
      <p>Clique no botão abaixo para começar o jogo</p>
      <button onClick={startGame}>Começar o jogo</button>
    </div>
  );
};

StartScreen.propTypes = {
  startGame: PropTypes.func.isRequired,
};

export default StartScreen;
