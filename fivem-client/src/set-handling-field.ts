/**
 * CFX:SET_HANDLING_FIELD
 *
 * 0XFE8064E3

 * Sets a global handling override for a specific vehicle class. The name is supposed to match the `handlingName` field from handling.meta.Example: `SetHandlingField('AIRTUG', 'CHandlingData', 'fSteeringLock', 360.0)`
 * 
 * ------------------------------------------------------------------
 * @param {string} vehicle The vehicle class to set data for.
 * @param {string} class_ The handling class to set. Only "CHandlingData" is supported at this time.
 * @param {string} fieldName The field name to set. These match the keys in handling.meta.
 * @param {any} value The value to set.
 */
export function setHandlingField(vehicle: string, class_: string, fieldName: string, value: any): void {
	const setHandlingField_result = Citizen.invokeNative<void>('0XFE8064E3', vehicle, class_, fieldName, value);
	return setHandlingField_result;
}