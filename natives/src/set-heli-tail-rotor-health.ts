import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_HELI_TAIL_ROTOR_HEALTH
 *
 * 0xE0002557891C8D8C

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} rotorHealth
 */
export function setHeliTailRotorHealth(vehicle: VehicleIndex, rotorHealth: number): void {
	const setHeliTailRotorHealth_result = Citizen.invokeNative<void>('0xE0002557891C8D8C', vehicle, rotorHealth);
	return setHeliTailRotorHealth_result;
}