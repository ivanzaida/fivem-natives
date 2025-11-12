import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_IS_CONSIDERED_BY_PLAYER
 *
 * 0xF04751F8E604D487

 * 
 * Passing FALSE to this command will make the player not consider this vehicle when pressing triangle to enter a vehicle. The player will instead pick the next closest vehicle to steal/enter.
 * 
 * Setting this to false, makes the specified vehicle to where if you press Y your character doesn't even attempt the animation to enter the vehicle. Hence it's not considered aka ignored.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} consideredByPlayerFlag
 */
export function setVehicleIsConsideredByPlayer(vehicle: VehicleIndex, consideredByPlayerFlag: boolean): void {
	const setVehicleIsConsideredByPlayer_result = Citizen.invokeNative<void>('0xF04751F8E604D487', vehicle, consideredByPlayerFlag);
	return setVehicleIsConsideredByPlayer_result;
}