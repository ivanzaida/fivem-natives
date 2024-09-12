/**
 * CFX:SET_HANDLING_FLOAT
 *
 * 0X90DD01C

 * Sets a global handling override for a specific vehicle class. The name is supposed to match the `handlingName` field from handling.meta.Example: `SetHandlingFloat('AIRTUG', 'CHandlingData', 'fSteeringLock', 360.0)`
 * 
 * ------------------------------------------------------------------
 * @param {string} vehicle The vehicle class to set data for.
 * @param {string} class_ The handling class to set. Only "CHandlingData" is supported at this time.
 * @param {string} fieldName The field name to set. These match the keys in handling.meta.
 * @param {number} value The floatingpoint value to set.
 */
export function setHandlingFloat(vehicle: string, class_: string, fieldName: string, value: number): void {
	const setHandlingFloat_result = Citizen.invokeNative<void>('0X90DD01C', vehicle, class_, fieldName, value);
	return setHandlingFloat_result;
}