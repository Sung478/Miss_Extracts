import React, {useState} from "react";
import { useForm } from "react-hook-form";
import image from "./SetGoalImage.png";
import "./SetGoal.css";

export default function SetGoal() {
  const {
    register,
    handleSubmit,
    formState: { errors }, reset
  } = useForm();
  const [goalInfo, setGoalInfo] = useState([]);
  const onSubmit = (data) => {
    setGoalInfo(data);  
    console.log(data);
    reset()
  };
  return (  
    <div className="setGoal">
      <div className="setGoalPic">
        <img src={image} alt="pic"  />
      </div>
      <div className="setGoalForm">
        <h2>Set Your Goal</h2>
        < form onSubmit={handleSubmit(onSubmit)}>
          <label>Weekly Goal</label>
          <br></br>
          <select {...register("weeklyGoal", { required: true })}>
            <option value="">Select your goal</option>
            <option value="Workout 2 days/week">Workout 2 days/week</option>
            <option value="Workout 3 days/week">Workout 3 days/week</option>
            <option value="Workout 4 days/week">Workout 4 days/week</option>
            <option value="Workout 5 days/week">Workout 5 days/week</option>
            <option value="Workout 6 days/week">Workout 6 days/week</option>
            <option value="Workout 7 days/week">Workout 7 days/week</option>
          </select>
          {errors?.weeklyGoal?.type === "required" && (
            <p>Goal selection is required</p>
          )}
          <br></br>
          <label>Your Weight</label>
          <br></br>
          <input
            type="number"
            step="0.001"
            placeholder="Weight"
            {...register("weight", { min: 0.5, max: 200, required: true })}
          />
          {errors.weight && (
            <p>Weight is required and must between 0.5 kg. and 200 kg.</p>
          )}
          <br></br>
          <label>Your Inspirations</label>
          <br></br>
          <textarea
            placeholder="Inspirations"
            {...register("Inspirations", { required: true })}
          />
          {errors?.Inspirations?.type === "required" && (
            <p>Inspirations is required</p>
          )}
          <br></br>
          <button>Set up</button>
        </form>
      </div>
    </div>
  );
}
