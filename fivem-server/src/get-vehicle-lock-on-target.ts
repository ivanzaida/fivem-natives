import { VehicleIndex, EntityIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_VEHICLE_LOCK_ON_TARGET
 *
 * 0X4A557117

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {EntityIndex} entity
 * @returns {boolean}  
 */
export function getVehicleLockOnTarget(vehicle: VehicleIndex, entity: EntityIndex): boolean {
	const getVehicleLockOnTarget_result = Citizen.invokeNative<boolean>('0X4A557117', vehicle, entity);
	return getVehicleLockOnTarget_result;
}