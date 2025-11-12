import { EntityIndex } from '@ivanzaida/structures'

/**
 * ENTITY:ENABLE_ENTITY_BULLET_COLLISION
 *
 * 0x9C69236A3D0F1B96

 * 
 * Just enables basic attachment collision flags on the entity
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 */
export function enableEntityBulletCollision(entity: EntityIndex): void {
	const enableEntityBulletCollision_result = Citizen.invokeNative<void>('0x9C69236A3D0F1B96', entity);
	return enableEntityBulletCollision_result;
}