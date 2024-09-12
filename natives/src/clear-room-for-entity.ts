import { EntityIndex } from '@ivanzaida/structures'

/**
 * INTERIOR:CLEAR_ROOM_FOR_ENTITY
 *
 * 0x1ACA339FBE1A59EA

 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 */
export function clearRoomForEntity(entity: EntityIndex): void {
	const clearRoomForEntity_result = Citizen.invokeNative<void>('0x1ACA339FBE1A59EA', entity);
	return clearRoomForEntity_result;
}