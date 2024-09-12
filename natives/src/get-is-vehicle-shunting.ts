import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_IS_VEHICLE_SHUNTING
 *
 * 0xF26071F4CBA82B4D

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {boolean}  
 */
export function getIsVehicleShunting(vehicle: VehicleIndex): boolean {
	const getIsVehicleShunting_result = Citizen.invokeNative<boolean>('0xF26071F4CBA82B4D', vehicle);
	return getIsVehicleShunting_result;
}