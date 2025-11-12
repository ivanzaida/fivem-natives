import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_GLIDER_ACTIVE
 *
 * 0x544996C0081ABDEB

 * 
 * Set state to true to extend the wings, false to retract them.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} active
 */
export function setGliderActive(vehicle: VehicleIndex, active: boolean): void {
	const setGliderActive_result = Citizen.invokeNative<void>('0x544996C0081ABDEB', vehicle, active);
	return setGliderActive_result;
}