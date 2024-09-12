import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:IS_VEHICLE_NEEDS_TO_BE_HOTWIRED
 *
 * 0XF9933BF4

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {boolean}  
 */
export function isVehicleNeedsToBeHotwired(vehicle: VehicleIndex): boolean {
	const isVehicleNeedsToBeHotwired_result = Citizen.invokeNative<boolean>('0XF9933BF4', vehicle);
	return isVehicleNeedsToBeHotwired_result;
}