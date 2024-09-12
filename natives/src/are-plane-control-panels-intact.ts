import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:ARE_PLANE_CONTROL_PANELS_INTACT
 *
 * 0xE5ECA5B21BBFA1E5

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} checkForZeroHealth
 * @returns {boolean}  
 */
export function arePlaneControlPanelsIntact(vehicle: VehicleIndex, checkForZeroHealth: boolean = false): boolean {
	const arePlaneControlPanelsIntact_result = Citizen.invokeNative<boolean>('0xE5ECA5B21BBFA1E5', vehicle, checkForZeroHealth);
	return arePlaneControlPanelsIntact_result;
}