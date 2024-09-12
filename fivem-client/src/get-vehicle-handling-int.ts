import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_VEHICLE_HANDLING_INT
 *
 * 0x27396C75

 * Returns the effective handling data of a vehicle as an integer value.Example: `local modelFlags = GetVehicleHandlingInt(vehicle, 'CHandlingData', 'strModelFlags')`
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle The vehicle to obtain data for.
 * @param {string} class_ The handling class to get. Only "CHandlingData" is supported at this time.
 * @param {string} fieldName The field name to get. These match the keys in handling.meta.
 * @returns {number}  An integer.
 */
export function getVehicleHandlingInt(vehicle: VehicleIndex, class_: string, fieldName: string): number {
	const getVehicleHandlingInt_result = Citizen.invokeNative<number>('0x27396C75', vehicle, class_, fieldName);
	return getVehicleHandlingInt_result;
}