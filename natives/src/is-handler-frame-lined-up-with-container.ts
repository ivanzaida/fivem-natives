import { VehicleIndex, EntityIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:IS_HANDLER_FRAME_LINED_UP_WITH_CONTAINER
 *
 * 0x6A5E9E4AC5B61452

 * 
 * This command will complain if the handler already has something attached to its frame.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} handler
 * @param {EntityIndex} entity
 * @returns {boolean}  
 */
export function isHandlerFrameLinedUpWithContainer(handler: VehicleIndex, entity: EntityIndex): boolean {
	const isHandlerFrameLinedUpWithContainer_result = Citizen.invokeNative<boolean>('0x6A5E9E4AC5B61452', handler, entity);
	return isHandlerFrameLinedUpWithContainer_result;
}