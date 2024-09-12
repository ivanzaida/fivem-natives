import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_VEHICLE_LOCK_ON_TARGET
 *
 * 0x4A557117

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle The vehicle to check.
 * @returns {boolean}  
 */
export function getVehicleLockOnTarget(vehicle: VehicleIndex): boolean {
	const getVehicleLockOnTarget_result = Citizen.invokeNative<boolean>('0x4A557117', vehicle);
	return getVehicleLockOnTarget_result;
}