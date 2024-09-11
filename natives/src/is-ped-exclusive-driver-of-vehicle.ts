import { VehicleIndex, PedIndex, IntRef } from '@ivanzaida/structures'

/**
 * VEHICLE:IS_PED_EXCLUSIVE_DRIVER_OF_VEHICLE
 *
 * 0x4877F2B0D2101BDE

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {PedIndex} ped
 * @param {IntRef} driver [Ref]
 * @returns {boolean}  
 */
export function isPedExclusiveDriverOfVehicle(vehicle: VehicleIndex, ped: PedIndex, driver: IntRef /* ptr */): boolean {
	const isPedExclusiveDriverOfVehicle_result = Citizen.invokeNative<boolean>('0x4877F2B0D2101BDE', vehicle, ped, driver.dataView);
	return isPedExclusiveDriverOfVehicle_result;
}