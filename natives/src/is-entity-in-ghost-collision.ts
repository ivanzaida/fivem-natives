import { EntityIndex } from '@ivanzaida/structures'

/**
 * NETWORK:IS_ENTITY_IN_GHOST_COLLISION
 *
 * 0x73DB31FD24210A89

 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @returns {boolean}  
 */
export function isEntityInGhostCollision(entity: EntityIndex): boolean {
	const isEntityInGhostCollision_result = Citizen.invokeNative<boolean>('0x73DB31FD24210A89', entity);
	return isEntityInGhostCollision_result;
}