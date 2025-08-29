import GameOverScreen from './screens/GameOverScreen';
import { useGameContext } from './providers/GameProvider';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';

export default function GameRoot() {
  const { gameOver, pickedNumber, handleResetGame } = useGameContext();
  return (
    <>
      { gameOver && <GameOverScreen />}
      { !gameOver && pickedNumber == null && <StartGameScreen /> }
      { !gameOver && pickedNumber != null && <GameScreen /> }
    </>
  );
}