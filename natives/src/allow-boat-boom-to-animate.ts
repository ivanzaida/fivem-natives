import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:ALLOW_BOAT_BOOM_TO_ANIMATE
 *
 * 0x76D20C5FEC8EC7F1

 * 
 * Allow the boat boom to be animated, this means the boom moves exactly with the animation played on it
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} swingFreely
 */
export function allowBoatBoomToAnimate(vehicle: VehicleIndex, swingFreely: boolean): void {
	const allowBoatBoomToAnimate_result = Citizen.invokeNative<void>('0x76D20C5FEC8EC7F1', vehicle, swingFreely);
	return allowBoatBoomToAnimate_result;
}