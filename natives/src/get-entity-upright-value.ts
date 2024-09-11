import { EntityIndex } from '@ivanzaida/structures'

/**
 * ENTITY:GET_ENTITY_UPRIGHT_VALUE
 *
 * 0x032CEF99C0D59B73

 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @returns {number}  
 */
export function getEntityUprightValue(entity: EntityIndex): number {
	const getEntityUprightValue_result = Citizen.invokeNative<number>('0x032CEF99C0D59B73', entity);
	return getEntityUprightValue_result;
}