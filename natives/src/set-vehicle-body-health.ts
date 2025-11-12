import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_BODY_HEALTH
 *
 * 0x3E7E7AD923FD91A7

 * 
 * 1000.0 = full,  0.0 = damaged
 * When body health drops to 0, the vehicle is very vulnerable to damage
 * 
 * p2 often set to 1000.0 in the decompiled scripts.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} health
 */
export function setVehicleBodyHealth(vehicle: VehicleIndex, health: number): void {
	const setVehicleBodyHealth_result = Citizen.invokeNative<void>('0x3E7E7AD923FD91A7', vehicle, health);
	return setVehicleBodyHealth_result;
}