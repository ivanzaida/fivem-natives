import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_HELI_TAIL_ROTOR_HEALTH
 *
 * 0x1F46B2A1DBF8BD25

 * 
 * Max 1000.
 * At 0 the tail rotor will stall.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {number}  
 */
export function getHeliTailRotorHealth(vehicle: VehicleIndex): number {
	const getHeliTailRotorHealth_result = Citizen.invokeNative<number>('0x1F46B2A1DBF8BD25', vehicle);
	return getHeliTailRotorHealth_result;
}