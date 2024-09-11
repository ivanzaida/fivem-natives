import { EVehicleClass } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_VEHICLE_CLASS_MAX_TRACTION
 *
 * 0x2525977066141996

 * 
 * ------------------------------------------------------------------
 * @param {EVehicleClass} vehicleClass
 * @returns {number}  
 */
export function getVehicleClassMaxTraction(vehicleClass: EVehicleClass | number): number {
	const getVehicleClassMaxTraction_result = Citizen.invokeNative<number>('0x2525977066141996', vehicleClass);
	return getVehicleClassMaxTraction_result;
}