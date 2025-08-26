import {useState} from "react";
export default function useGoals()  {
  const [goals, setGoals] = useState([]);
  const handleAddGoal = (input) => {
    if (input.trim().length > 0) {
      setGoals((oldValue) => [...oldValue, input.trim()]);
    }
  };
  const handleRemoveGoal = (itemIndex) => {
    setGoals((oldValue) => oldValue.filter((item, index) => itemIndex !== index))
  }
  return {
    goals,
    handleAddGoal,
    handleRemoveGoal
  }
}