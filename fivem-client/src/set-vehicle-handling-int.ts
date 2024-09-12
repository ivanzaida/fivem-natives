import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:SET_VEHICLE_HANDLING_INT
 *
 * 0XC37F4CF9

 * Sets a handling override for a specific vehicle. Certain handling flags can only be set globally using `SET_HANDLING_INT`, this might require some experimentation.
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle The vehicle to set data for.
 * @param {string} class_ The handling class to set. Only "CHandlingData" is supported at this time.
 * @param {string} fieldName The field name to set. These match the keys in handling.meta.
 * @param {number} value The integer value to set.
 */
export function setVehicleHandlingInt(vehicle: VehicleIndex, class_: string, fieldName: string, value: number): void {
	const setVehicleHandlingInt_result = Citizen.invokeNative<void>('0XC37F4CF9', vehicle, class_, fieldName, value);
	return setVehicleHandlingInt_result;
}