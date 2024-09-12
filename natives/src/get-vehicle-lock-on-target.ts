import { VehicleIndex, IntRef } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_VEHICLE_LOCK_ON_TARGET
 *
 * 0xE5EF4685EE5EF675

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {IntRef} entity [Ref]
 * @returns {boolean}  
 */
export function getVehicleLockOnTarget(vehicle: VehicleIndex, entity: IntRef /* ptr */): boolean {
	const getVehicleLockOnTarget_result = Citizen.invokeNative<boolean>('0xE5EF4685EE5EF675', vehicle, entity.dataView);
	return getVehicleLockOnTarget_result;
}