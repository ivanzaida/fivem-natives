import { PedIndex, VehicleIndex, ETempaction } from '@ivanzaida/structures'

/**
 * TASK:TASK_VEHICLE_TEMP_ACTION
 *
 * 0xFCCE667AD0E974AD

 * 
 * These should only be used for short actions
 * 
 * '1 - brake
 * '3 - brake + reverse
 * '4 - turn left 90 + braking
 * '5 - turn right 90 + braking
 * '6 - brake strong (handbrake?) until time ends
 * '7 - turn left + accelerate
 * '8 - turn right + accelerate
 * '9 - weak acceleration
 * '10 - turn left + restore wheel pos to center in the end
 * '11 - turn right + restore wheel pos to center in the end
 * '13 - turn left + go reverse
 * '14 - turn left + go reverse
 * '16 - crash the game after like 2 seconds :)
 * '17 - keep actual state, game crashed after few tries
 * '18 - game crash
 * '19 - strong brake + turn left/right
 * '20 - weak brake + turn left then turn right
 * '21 - weak brake + turn right then turn left
 * '22 - brake + reverse
 * '23 - accelerate fast
 * '24 - brake
 * '25 - brake turning left then when almost stopping it turns left more
 * '26 - brake turning right then when almost stopping it turns right more
 * '27 - brake until car stop or until time ends
 * '28 - brake + strong reverse acceleration
 * '30 - performs a burnout (brake until stop + brake and accelerate)
 * '31 - accelerate + handbrake
 * '32 - accelerate very strong
 * 
 * Seems to be this:
 * Works on NPCs, but overrides their current task. If inside a task sequence (and not being the last task), "time" will work, otherwise the task will be performed forever until tasked with something else
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {VehicleIndex} vehicle
 * @param {ETempaction} action
 * @param {number} time
 */
export function taskVehicleTempAction(ped: PedIndex, vehicle: VehicleIndex, action: ETempaction | number, time: number): void {
	const taskVehicleTempAction_result = Citizen.invokeNative<void>('0xFCCE667AD0E974AD', ped, vehicle, action, time);
	return taskVehicleTempAction_result;
}