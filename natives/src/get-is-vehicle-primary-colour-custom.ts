import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_IS_VEHICLE_PRIMARY_COLOUR_CUSTOM
 *
 * 0xA9D64A14804D119B

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {boolean}  
 */
export function getIsVehiclePrimaryColourCustom(vehicle: VehicleIndex): boolean {
	const getIsVehiclePrimaryColourCustom_result = Citizen.invokeNative<boolean>('0xA9D64A14804D119B', vehicle);
	return getIsVehiclePrimaryColourCustom_result;
}