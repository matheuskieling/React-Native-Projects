import { createContext, useContext, useState } from 'react';

interface GameContextValue {
  pickedNumber: number | null;
  guesses: number[];
  gameOver: boolean;
  rounds: number;
  handleGameOver: () => void;
  handleAddNewGuess: (guess: number) => void;
  handlePickNumber: (number: number) => void;
  handleResetGame: () => void;
  handleNextRound: () => void;
}
const initialGameContext = {
  pickedNumber: null,
  gameOver: false,
  guesses: [],
  rounds: 1,
  handleGameOver: () => {},
  handlePickNumber: (number: number) => {},
  handleResetGame: () => {},
  handleNextRound: () => {},
  handleAddNewGuess: (guess: number) => {},
}
export const GameContext = createContext<GameContextValue>(initialGameContext);
interface GameProviderProps {
  children: React.ReactNode;
}
export default function GameProvider({ children }: GameProviderProps) {
  const [pickedNumber, setPickedNumber] = useState<number | null>(null);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [rounds, setRounds] = useState<number>(0);
  const [guesses, setGuesses] = useState<number[]>([]);

  const handleAddNewGuess = (number: number) => {
    setGuesses((prevGuesses) => [number, ...prevGuesses]);
  }

  const handleGameOver = (): void => {
    setGameOver(true);
  }

  const handlePickNumber = (number: number) => {
    setPickedNumber(number);
  }
  const handleResetGame = (): void => {
    setPickedNumber(null);
    setRounds(0);
    setGameOver(false);
    setGuesses([]);
  }
  const handleNextRound = (): void => {
    setRounds((prev: number) => prev + 1);
  }

  return (
    <GameContext.Provider value={{
      pickedNumber,
      guesses,
      gameOver,
      rounds,
      handleGameOver,
      handlePickNumber,
      handleResetGame,
      handleNextRound,
      handleAddNewGuess,
    }}>
      {children}
    </GameContext.Provider>
  )
}

export function useGameContext() {
  return useContext(GameContext);
}