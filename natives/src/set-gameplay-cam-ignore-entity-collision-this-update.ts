import { EntityIndex } from '@ivanzaida/structures'

/**
 * CAM:SET_GAMEPLAY_CAM_IGNORE_ENTITY_COLLISION_THIS_UPDATE
 *
 * 0x159356D054E19158

 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} index
 */
export function setGameplayCamIgnoreEntityCollisionThisUpdate(index: EntityIndex): void {
	const setGameplayCamIgnoreEntityCollisionThisUpdate_result = Citizen.invokeNative<void>('0x159356D054E19158', index);
	return setGameplayCamIgnoreEntityCollisionThisUpdate_result;
}