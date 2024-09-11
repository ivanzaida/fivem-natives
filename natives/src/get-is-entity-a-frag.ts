import { EntityIndex } from '@ivanzaida/structures'

/**
 * PHYSICS:GET_IS_ENTITY_A_FRAG
 *
 * 0x4F1CAAB808618FF8

 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entityId
 * @returns {boolean}  
 */
export function getIsEntityAFrag(entityId: EntityIndex): boolean {
	const getIsEntityAFrag_result = Citizen.invokeNative<boolean>('0x4F1CAAB808618FF8', entityId);
	return getIsEntityAFrag_result;
}