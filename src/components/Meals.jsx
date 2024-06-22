import useHttp from "../hooks/useHttp";
import MealItem from "./MealItem";
import Error from "./Error";
const requestConfiq = {};

export default function Meals() {
  const {
    data: loadedMeals,
    isLoading,
    error,
  } = useHttp("http://localhost:3000/meals", requestConfiq, []);
  // console.log(loadedMeals);
  if (isLoading) {
    return <p className="center">fetching the meals....</p>;
  }
  if(error){
    return <Error title="failed to fetch meals" meassage={error} />
  }
  // if(!data){
  //   return <p>no meals found</p>
  // }
  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}
