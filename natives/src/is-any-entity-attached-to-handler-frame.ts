import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:IS_ANY_ENTITY_ATTACHED_TO_HANDLER_FRAME
 *
 * 0x43F2D662C7522C93

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} handler
 * @returns {boolean}  
 */
export function isAnyEntityAttachedToHandlerFrame(handler: VehicleIndex): boolean {
	const isAnyEntityAttachedToHandlerFrame_result = Citizen.invokeNative<boolean>('0x43F2D662C7522C93', handler);
	return isAnyEntityAttachedToHandlerFrame_result;
}