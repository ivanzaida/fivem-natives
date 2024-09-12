import { EntityIndex } from '@ivanzaida/structures'

/**
 * ENTITY:IS_ENTITY_IN_AIR
 *
 * 0x3F18810075C77D41

 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @returns {boolean}  
 */
export function isEntityInAir(entity: EntityIndex): boolean {
	const isEntityInAir_result = Citizen.invokeNative<boolean>('0x3F18810075C77D41', entity);
	return isEntityInAir_result;
}