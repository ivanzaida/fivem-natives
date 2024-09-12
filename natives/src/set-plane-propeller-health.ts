import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_PLANE_PROPELLER_HEALTH
 *
 * 0x6C0C380EEAAFA7E3

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} health
 * @returns {boolean}  
 */
export function setPlanePropellerHealth(vehicle: VehicleIndex, health: number): boolean {
	const setPlanePropellerHealth_result = Citizen.invokeNative<boolean>('0x6C0C380EEAAFA7E3', vehicle, health);
	return setPlanePropellerHealth_result;
}