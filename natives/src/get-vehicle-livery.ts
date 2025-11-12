import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_VEHICLE_LIVERY
 *
 * 0xA089B04A208DBD0B

 * 
 * -1 = no livery
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {number}  
 */
export function getVehicleLivery(vehicle: VehicleIndex): number {
	const getVehicleLivery_result = Citizen.invokeNative<number>('0xA089B04A208DBD0B', vehicle);
	return getVehicleLivery_result;
}