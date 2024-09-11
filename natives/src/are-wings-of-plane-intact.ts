import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:ARE_WINGS_OF_PLANE_INTACT
 *
 * 0x287065449969E42F

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {boolean}  
 */
export function areWingsOfPlaneIntact(vehicle: VehicleIndex): boolean {
	const areWingsOfPlaneIntact_result = Citizen.invokeNative<boolean>('0x287065449969E42F', vehicle);
	return areWingsOfPlaneIntact_result;
}