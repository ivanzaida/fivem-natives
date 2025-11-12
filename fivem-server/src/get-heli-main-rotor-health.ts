import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_HELI_MAIN_ROTOR_HEALTH
 *
 * 0xF01E2AAB

 * 
 * Max 1000.
 * At 0 the main rotor will stall.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle The target vehicle.
 * @returns {number}  
 */
export function getHeliMainRotorHealth(vehicle: VehicleIndex): number {
	const getHeliMainRotorHealth_result = Citizen.invokeNative<number>('0xF01E2AAB', vehicle);
	return getHeliMainRotorHealth_result;
}