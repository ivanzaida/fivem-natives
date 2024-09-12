import { VehicleIndex, Vector3Ref } from '@ivanzaida/structures'

/**
 * CFX:SET_VEHICLE_HANDLING_VECTOR
 *
 * 0x12497890

 * Sets a handling override for a specific vehicle. Certain handling flags can only be set globally using `SET_HANDLING_VECTOR`, this might require some experimentation.
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle The vehicle to set data for.
 * @param {string} class_ The handling class to set. Only "CHandlingData" is supported at this time.
 * @param {string} fieldName The field name to set. These match the keys in handling.meta.
 * @param {Vector3Ref} value The Vector3 value to set.
 */
export function setVehicleHandlingVector(vehicle: VehicleIndex, class_: string, fieldName: string, value: Vector3Ref): void {
	const setVehicleHandlingVector_result = Citizen.invokeNative<void>('0x12497890', vehicle, class_, fieldName, value);
	return setVehicleHandlingVector_result;
}