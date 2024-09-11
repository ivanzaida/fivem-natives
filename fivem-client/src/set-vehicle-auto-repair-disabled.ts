import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:SET_VEHICLE_AUTO_REPAIR_DISABLED
 *
 * 0X5F3A3574

 * Disables the vehicle from being repaired when a vehicle extra is enabled.
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle The vehicle to set disable auto vehicle repair.
 * @param {boolean} value Setting the value to  true prevents the vehicle from being repaired when a extra is enabled. Setting the value to false allows the vehicle from being repaired when a extra is enabled.
 */
export function setVehicleAutoRepairDisabled(vehicle: VehicleIndex, value: boolean): void {
	const setVehicleAutoRepairDisabled_result = Citizen.invokeNative<void>('0X5F3A3574', vehicle, value);
	return setVehicleAutoRepairDisabled_result;
}