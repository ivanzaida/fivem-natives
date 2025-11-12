import { EntityIndex } from '@ivanzaida/structures'

/**
 * ENTITY:GET_ENTITY_BONE_COUNT
 *
 * 0x132FBDC52691A1A7

 * 
 * Returns the number of bones in the entity
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @returns {number}  
 */
export function getEntityBoneCount(entity: EntityIndex): number {
	const getEntityBoneCount_result = Citizen.invokeNative<number>('0x132FBDC52691A1A7', entity);
	return getEntityBoneCount_result;
}