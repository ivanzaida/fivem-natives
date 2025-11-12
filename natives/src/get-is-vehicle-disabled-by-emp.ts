import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_IS_VEHICLE_DISABLED_BY_EMP
 *
 * 0x81A129E894BD7138

 * 
 * Returns whether this vehicle is currently disabled by an EMP mine.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {boolean}  
 */
export function getIsVehicleDisabledByEmp(vehicle: VehicleIndex): boolean {
	const getIsVehicleDisabledByEmp_result = Citizen.invokeNative<boolean>('0x81A129E894BD7138', vehicle);
	return getIsVehicleDisabledByEmp_result;
}