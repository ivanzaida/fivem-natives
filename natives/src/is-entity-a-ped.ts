import { EntityIndex } from '@ivanzaida/structures'

/**
 * ENTITY:IS_ENTITY_A_PED
 *
 * 0x0101C509A6E67F99

 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @returns {boolean}  
 */
export function isEntityAPed(entity: EntityIndex): boolean {
	const isEntityAPed_result = Citizen.invokeNative<boolean>('0x0101C509A6E67F99', entity);
	return isEntityAPed_result;
}