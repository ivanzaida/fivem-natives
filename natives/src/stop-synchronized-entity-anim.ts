import { EntityIndex } from '@ivanzaida/structures'

/**
 * ENTITY:STOP_SYNCHRONIZED_ENTITY_ANIM
 *
 * 0xC0086E5CBF13BBF7

 * 
 * Use this to remove an entity from a synchronized scene
 * 
 * p1 sync task id?
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @param {number} blendDelta
 * @param {boolean} activateCollision
 * @returns {boolean}  
 */
export function stopSynchronizedEntityAnim(entity: EntityIndex, blendDelta: number, activateCollision: boolean): boolean {
	const stopSynchronizedEntityAnim_result = Citizen.invokeNative<boolean>('0xC0086E5CBF13BBF7', entity, blendDelta, activateCollision);
	return stopSynchronizedEntityAnim_result;
}