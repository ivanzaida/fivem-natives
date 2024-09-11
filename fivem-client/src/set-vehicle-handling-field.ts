import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:SET_VEHICLE_HANDLING_FIELD
 *
 * 0X2BA40795

 * Sets a handling override for a specific vehicle. Certain handling flags can only be set globally using `SET_HANDLING_FIELD`, this might require some experimentation.Example: `SetVehicleHandlingField(vehicle, 'CHandlingData', 'fSteeringLock', 360.0)`
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle The vehicle to set data for.
 * @param {string} class_ The handling class to set. Only "CHandlingData" is supported at this time.
 * @param {string} fieldName The field name to set. These match the keys in handling.meta.
 * @param {any} value The value to set.
 */
export function setVehicleHandlingField(vehicle: VehicleIndex, class_: string, fieldName: string, value: any): void {
	const setVehicleHandlingField_result = Citizen.invokeNative<void>('0X2BA40795', vehicle, class_, fieldName, value);
	return setVehicleHandlingField_result;
}