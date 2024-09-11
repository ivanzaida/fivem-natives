import { EntityIndex, InteriorInstanceIndex } from '@ivanzaida/structures'

/**
 * INTERIOR:FORCE_ROOM_FOR_ENTITY
 *
 * 0x10D289FA72A25777

 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @param {InteriorInstanceIndex} interiorInstance
 * @param {number} roomKey
 */
export function forceRoomForEntity(entity: EntityIndex, interiorInstance: InteriorInstanceIndex, roomKey: number): void {
	const forceRoomForEntity_result = Citizen.invokeNative<void>('0x10D289FA72A25777', entity, interiorInstance, roomKey);
	return forceRoomForEntity_result;
}