import { EVehicleClass } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_VEHICLE_CLASS_MAX_AGILITY
 *
 * 0x3EFC9FBA218CD076

 * 
 * ------------------------------------------------------------------
 * @param {EVehicleClass} vehicleClass
 * @returns {number}  
 */
export function getVehicleClassMaxAgility(vehicleClass: EVehicleClass | number): number {
	const getVehicleClassMaxAgility_result = Citizen.invokeNative<number>('0x3EFC9FBA218CD076', vehicleClass);
	return getVehicleClassMaxAgility_result;
}