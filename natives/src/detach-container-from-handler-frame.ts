import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:DETACH_CONTAINER_FROM_HANDLER_FRAME
 *
 * 0x7AA69E5CE0F1C51A

 * 
 * Detaches any container which has been attached to the handler's frame. It is up to the script what to
 * do with the objects once detached.
 * This command will complain if nothing is attached to the handler's frame.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} handler
 */
export function detachContainerFromHandlerFrame(handler: VehicleIndex): void {
	const detachContainerFromHandlerFrame_result = Citizen.invokeNative<void>('0x7AA69E5CE0F1C51A', handler);
	return detachContainerFromHandlerFrame_result;
}