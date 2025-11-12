import { VehicleIndex, EntityIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:ATTACH_CONTAINER_TO_HANDLER_FRAME_WHEN_LINED_UP
 *
 * 0xBD3D97A93EBB67B3

 * 
 * Attaches an instance of the special container prop used with the handler onto the handler's frame by
 * lerping it instead of warping it so the caller is responsible for first checking that the container
 * is in position with IS_HANDLER_FRAME_LINED_UP_WITH_CONTAINER.
 * This command will complain if the handler already has something attached to its frame.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} handler
 * @param {EntityIndex} entity
 */
export function attachContainerToHandlerFrameWhenLinedUp(handler: VehicleIndex, entity: EntityIndex): void {
	const attachContainerToHandlerFrameWhenLinedUp_result = Citizen.invokeNative<void>('0xBD3D97A93EBB67B3', handler, entity);
	return attachContainerToHandlerFrameWhenLinedUp_result;
}