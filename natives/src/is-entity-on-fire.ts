import { EntityIndex } from '@ivanzaida/structures'

/**
 * FIRE:IS_ENTITY_ON_FIRE
 *
 * 0x5B702A5D1F2635BE

 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @returns {boolean}  
 */
export function isEntityOnFire(entity: EntityIndex): boolean {
	const isEntityOnFire_result = Citizen.invokeNative<boolean>('0x5B702A5D1F2635BE', entity);
	return isEntityOnFire_result;
}