import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_IS_VEHICLE_PRIMARY_COLOUR_CUSTOM
 *
 * 0XD7EC8760

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {boolean}  
 */
export function getIsVehiclePrimaryColourCustom(vehicle: VehicleIndex): boolean {
	const getIsVehiclePrimaryColourCustom_result = Citizen.invokeNative<boolean>('0XD7EC8760', vehicle);
	return getIsVehiclePrimaryColourCustom_result;
}