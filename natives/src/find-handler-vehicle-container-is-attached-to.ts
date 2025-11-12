import { EntityIndex, VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:FIND_HANDLER_VEHICLE_CONTAINER_IS_ATTACHED_TO
 *
 * 0x4218094D251842BD

 * 
 * Finds the vehicle that is carrying this entity with a handler frame.
 * The model of the entity must be prop_contr_03b_ld or the function will return 0.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @returns {VehicleIndex}  
 */
export function findHandlerVehicleContainerIsAttachedTo(entity: EntityIndex): VehicleIndex {
	const findHandlerVehicleContainerIsAttachedTo_result = Citizen.invokeNative<VehicleIndex>('0x4218094D251842BD', entity);
	return findHandlerVehicleContainerIsAttachedTo_result;
}