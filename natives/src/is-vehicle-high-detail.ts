import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:IS_VEHICLE_HIGH_DETAIL
 *
 * 0xB3F63B683EB1995A

 * 
 * Used primarily for cut scenes
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {boolean}  
 */
export function isVehicleHighDetail(vehicle: VehicleIndex): boolean {
	const isVehicleHighDetail_result = Citizen.invokeNative<boolean>('0xB3F63B683EB1995A', vehicle);
	return isVehicleHighDetail_result;
}