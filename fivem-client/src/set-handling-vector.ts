import { Vector3Ref } from '@ivanzaida/structures'

/**
 * CFX:SET_HANDLING_VECTOR
 *
 * 0x7F9D543

 * Sets a global handling override for a specific vehicle class. The name is supposed to match the `handlingName` field from handling.meta.Example: `SetHandlingVector('AIRTUG', 'CHandlingData', 'vecCentreOfMassOffset', vector3(0.0, 0.0, -5.0))`
 * 
 * ------------------------------------------------------------------
 * @param {string} vehicle The vehicle class to set data for.
 * @param {string} class_ The handling class to set. Only "CHandlingData" is supported at this time.
 * @param {string} fieldName The field name to set. These match the keys in handling.meta.
 * @param {Vector3Ref} value The Vector3 value to set.
 */
export function setHandlingVector(vehicle: string, class_: string, fieldName: string, value: Vector3Ref): void {
	const setHandlingVector_result = Citizen.invokeNative<void>('0x7F9D543', vehicle, class_, fieldName, value);
	return setHandlingVector_result;
}