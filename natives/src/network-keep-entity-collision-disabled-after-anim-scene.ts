import { EntityIndex } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_KEEP_ENTITY_COLLISION_DISABLED_AFTER_ANIM_SCENE
 *
 * 0x69BED8420A766753

 * 
 * Stops the Cutscene anim manager from enabling the collision of the entity
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @param {boolean} keepCollisionDisabled
 */
export function networkKeepEntityCollisionDisabledAfterAnimScene(entity: EntityIndex, keepCollisionDisabled: boolean): void {
	const networkKeepEntityCollisionDisabledAfterAnimScene_result = Citizen.invokeNative<void>('0x69BED8420A766753', entity, keepCollisionDisabled);
	return networkKeepEntityCollisionDisabledAfterAnimScene_result;
}