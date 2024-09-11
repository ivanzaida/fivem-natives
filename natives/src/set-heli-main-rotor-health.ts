import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_HELI_MAIN_ROTOR_HEALTH
 *
 * 0x05EE5180C78E4990

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} rotorHealth
 */
export function setHeliMainRotorHealth(vehicle: VehicleIndex, rotorHealth: number): void {
	const setHeliMainRotorHealth_result = Citizen.invokeNative<void>('0x05EE5180C78E4990', vehicle, rotorHealth);
	return setHeliMainRotorHealth_result;
}