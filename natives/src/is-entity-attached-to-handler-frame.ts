import { VehicleIndex, EntityIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:IS_ENTITY_ATTACHED_TO_HANDLER_FRAME
 *
 * 0x1DB196628F3A0BD8

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} handler
 * @param {EntityIndex} container
 * @returns {boolean}  
 */
export function isEntityAttachedToHandlerFrame(handler: VehicleIndex, container: EntityIndex): boolean {
	const isEntityAttachedToHandlerFrame_result = Citizen.invokeNative<boolean>('0x1DB196628F3A0BD8', handler, container);
	return isEntityAttachedToHandlerFrame_result;
}