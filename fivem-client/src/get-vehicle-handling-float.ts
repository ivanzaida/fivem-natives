import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_VEHICLE_HANDLING_FLOAT
 *
 * 0X642FC12F

 * Returns the effective handling data of a vehicle as a floating-point value.Example: `local fSteeringLock = GetVehicleHandlingFloat(vehicle, 'CHandlingData', 'fSteeringLock')`
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle The vehicle to obtain data for.
 * @param {string} class_ The handling class to get. Only "CHandlingData" is supported at this time.
 * @param {string} fieldName The field name to get. These match the keys in handling.meta.
 * @returns {number}  A floating-point value.
 */
export function getVehicleHandlingFloat(vehicle: VehicleIndex, class_: string, fieldName: string): number {
	const getVehicleHandlingFloat_result = Citizen.invokeNative<number>('0X642FC12F', vehicle, class_, fieldName);
	return getVehicleHandlingFloat_result;
}