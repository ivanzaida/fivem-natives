import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_VEHICLE_LAYOUT_HASH
 *
 * 0x58428BC502F48C75

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {number}  
 */
export function getVehicleLayoutHash(vehicle: VehicleIndex): number {
	const getVehicleLayoutHash_result = Citizen.invokeNative<number>('0x58428BC502F48C75', vehicle);
	return getVehicleLayoutHash_result;
}