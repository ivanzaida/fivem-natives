import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_STEER_BIAS
 *
 * 0xDEABDA7736297FEB

 * 
 * The steer bias value gets added to the players control input for that car.
 * The bias is in the range -1.0f (hard right) to 1.0f (hard left). Ie If you set the bias to 0.1 the car will pull to the left a little bit.
 * By modifying the value from frame to frame you can emulate buggered controls or somebody fighting over control of the wheel.
 * 
 * Locks the vehicle's steering to the desired angle, explained below.
 * 
 * Requires to be called onTick. Steering is unlocked the moment the function stops being called on the vehicle.
 * 
 * Steer bias:
 * -1.0 = full right
 * 0.0 = centered steering
 * 1.0 = full left
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} bias
 */
export function setVehicleSteerBias(vehicle: VehicleIndex, bias: number): void {
	const setVehicleSteerBias_result = Citizen.invokeNative<void>('0xDEABDA7736297FEB', vehicle, bias);
	return setVehicleSteerBias_result;
}