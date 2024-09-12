/**
 * CFX:SET_HANDLING_INT
 *
 * 0X8AB3F46C

 * Sets a global handling override for a specific vehicle class. The name is supposed to match the `handlingName` field from handling.meta.
 * 
 * ------------------------------------------------------------------
 * @param {string} vehicle The vehicle class to set data for.
 * @param {string} class_ The handling class to set. Only "CHandlingData" is supported at this time.
 * @param {string} fieldName The field name to set. These match the keys in handling.meta.
 * @param {number} value The integer value to set.
 */
export function setHandlingInt(vehicle: string, class_: string, fieldName: string, value: number): void {
	const setHandlingInt_result = Citizen.invokeNative<void>('0X8AB3F46C', vehicle, class_, fieldName, value);
	return setHandlingInt_result;
}