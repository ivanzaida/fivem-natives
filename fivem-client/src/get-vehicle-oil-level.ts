import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_VEHICLE_OIL_LEVEL
 *
 * 0XFC7F8EF4

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {number}  
 */
export function getVehicleOilLevel(vehicle: VehicleIndex): number {
	const getVehicleOilLevel_result = Citizen.invokeNative<number>('0XFC7F8EF4', vehicle);
	return getVehicleOilLevel_result;
}