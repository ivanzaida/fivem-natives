import { EntityIndex } from '@ivanzaida/structures'

/**
 * ENTITY:IS_ENTITY_UPRIGHT
 *
 * 0xE99B9AC112F55D16

 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @param {number} angleToVerticalLimit
 * @returns {boolean}  
 */
export function isEntityUpright(entity: EntityIndex, angleToVerticalLimit: number = 90): boolean {
	const isEntityUpright_result = Citizen.invokeNative<boolean>('0xE99B9AC112F55D16', entity, angleToVerticalLimit);
	return isEntityUpright_result;
}