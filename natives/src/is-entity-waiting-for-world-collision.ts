import { EntityIndex } from '@ivanzaida/structures'

/**
 * ENTITY:IS_ENTITY_WAITING_FOR_WORLD_COLLISION
 *
 * 0x642A49B0C066F723

 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @returns {boolean}  
 */
export function isEntityWaitingForWorldCollision(entity: EntityIndex): boolean {
	const isEntityWaitingForWorldCollision_result = Citizen.invokeNative<boolean>('0x642A49B0C066F723', entity);
	return isEntityWaitingForWorldCollision_result;
}