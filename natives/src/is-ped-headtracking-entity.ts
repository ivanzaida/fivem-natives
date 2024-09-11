import { PedIndex, EntityIndex } from '@ivanzaida/structures'

/**
 * PED:IS_PED_HEADTRACKING_ENTITY
 *
 * 0x2E0309EF5F2EBDB1

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {EntityIndex} entity
 * @returns {boolean}  
 */
export function isPedHeadtrackingEntity(ped: PedIndex, entity: EntityIndex): boolean {
	const isPedHeadtrackingEntity_result = Citizen.invokeNative<boolean>('0x2E0309EF5F2EBDB1', ped, entity);
	return isPedHeadtrackingEntity_result;
}