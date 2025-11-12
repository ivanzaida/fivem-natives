import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_VEHICLE_LIVERY
 *
 * 0xEC82A51D

 * 
 * -1 = no livery
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {number}  
 */
export function getVehicleLivery(vehicle: VehicleIndex): number {
	const getVehicleLivery_result = Citizen.invokeNative<number>('0xEC82A51D', vehicle);
	return getVehicleLivery_result;
}