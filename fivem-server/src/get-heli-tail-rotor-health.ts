import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_HELI_TAIL_ROTOR_HEALTH
 *
 * 0xA41BC13D

 * 
 * Max 1000.
 * At 0 the tail rotor will stall.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle The target vehicle.
 * @returns {number}  
 */
export function getHeliTailRotorHealth(vehicle: VehicleIndex): number {
	const getHeliTailRotorHealth_result = Citizen.invokeNative<number>('0xA41BC13D', vehicle);
	return getHeliTailRotorHealth_result;
}