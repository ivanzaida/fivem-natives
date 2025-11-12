import { RopeIndex, EntityIndex } from '@ivanzaida/structures'

/**
 * PHYSICS:ATTACH_ROPE_TO_ENTITY
 *
 * 0x73F3DA3B1BFA714B

 * 
 * The position supplied can be anywhere, and the entity should anchor relative to that point from it's origin.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {RopeIndex} ropeID
 * @param {EntityIndex} entityID
 * @param {number} worldPositionX
 * @param {number} worldPositionY
 * @param {number} worldPositionZ
 * @param {number} componentPart
 */
export function attachRopeToEntity(ropeID: RopeIndex, entityID: EntityIndex, worldPositionX: number, worldPositionY: number, worldPositionZ: number, componentPart: number): void {
	const attachRopeToEntity_result = Citizen.invokeNative<void>('0x73F3DA3B1BFA714B', ropeID, entityID, worldPositionX, worldPositionY, worldPositionZ, componentPart);
	return attachRopeToEntity_result;
}