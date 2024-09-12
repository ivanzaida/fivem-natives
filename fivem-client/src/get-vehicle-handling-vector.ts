import { VehicleIndex, Vector3Ref } from '@ivanzaida/structures'

/**
 * CFX:GET_VEHICLE_HANDLING_VECTOR
 *
 * 0XFB341304

 * Returns the effective handling data of a vehicle as a vector value.Example: `local inertiaMultiplier = GetVehicleHandlingVector(vehicle, 'CHandlingData', 'vecInertiaMultiplier')`
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle The vehicle to obtain data for.
 * @param {string} class_ The handling class to get. Only "CHandlingData" is supported at this time.
 * @param {string} fieldName The field name to get. These match the keys in handling.meta.
 * @returns {Vector3Ref}  An integer.
 */
export function getVehicleHandlingVector(vehicle: VehicleIndex, class_: string, fieldName: string): Vector3Ref {
	const getVehicleHandlingVector_result = Citizen.invokeNative<Vector3Ref>('0XFB341304', vehicle, class_, fieldName);
	return getVehicleHandlingVector_result;
}