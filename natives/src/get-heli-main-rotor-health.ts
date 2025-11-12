import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_HELI_MAIN_ROTOR_HEALTH
 *
 * 0x22E252733390A9A9

 * 
 * Max 1000.
 * At 0 the main rotor will stall.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {number}  
 */
export function getHeliMainRotorHealth(vehicle: VehicleIndex): number {
	const getHeliMainRotorHealth_result = Citizen.invokeNative<number>('0x22E252733390A9A9', vehicle);
	return getHeliMainRotorHealth_result;
}