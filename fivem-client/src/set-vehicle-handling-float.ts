import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:SET_VEHICLE_HANDLING_FLOAT
 *
 * 0X488C86D2

 * Sets a handling override for a specific vehicle. Certain handling flags can only be set globally using `SET_HANDLING_FLOAT`, this might require some experimentation.Example: `SetVehicleHandlingFloat(vehicle, 'CHandlingData', 'fSteeringLock', 360.0)`
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle The vehicle to set data for.
 * @param {string} class_ The handling class to set. Only "CHandlingData" is supported at this time.
 * @param {string} fieldName The field name to set. These match the keys in handling.meta.
 * @param {number} value The floatingpoint value to set.
 */
export function setVehicleHandlingFloat(vehicle: VehicleIndex, class_: string, fieldName: string, value: number): void {
	const setVehicleHandlingFloat_result = Citizen.invokeNative<void>('0X488C86D2', vehicle, class_, fieldName, value);
	return setVehicleHandlingFloat_result;
}