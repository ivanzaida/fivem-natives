import { VehicleIndex, EntityIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:HAS_VEHICLE_PETROLTANK_SET_ON_FIRE_BY_ENTITY
 *
 * 0xB8E85A4A8536807D

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {EntityIndex} entity
 * @returns {boolean}  
 */
export function hasVehiclePetroltankSetOnFireByEntity(vehicle: VehicleIndex, entity: EntityIndex): boolean {
	const hasVehiclePetroltankSetOnFireByEntity_result = Citizen.invokeNative<boolean>('0xB8E85A4A8536807D', vehicle, entity);
	return hasVehiclePetroltankSetOnFireByEntity_result;
}