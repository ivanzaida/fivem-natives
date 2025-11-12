import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SWING_BOAT_BOOM_FREELY
 *
 * 0x501C6124BE36E301

 * 
 * Allow the boat boom to swing freely
 * 
 * Same call as ALLOW_BOAT_BOOM_TO_ANIMATE
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} swingFreely
 */
export function swingBoatBoomFreely(vehicle: VehicleIndex, swingFreely: boolean): void {
	const swingBoatBoomFreely_result = Citizen.invokeNative<void>('0x501C6124BE36E301', vehicle, swingFreely);
	return swingBoatBoomFreely_result;
}