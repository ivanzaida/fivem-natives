import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_VEHICLE_CURRENT_RPM
 *
 * 0xE7B12B54

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {number}  
 */
export function getVehicleCurrentRpm(vehicle: VehicleIndex): number {
	const getVehicleCurrentRpm_result = Citizen.invokeNative<number>('0xE7B12B54', vehicle);
	return getVehicleCurrentRpm_result;
}