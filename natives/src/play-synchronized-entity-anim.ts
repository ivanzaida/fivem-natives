import { EntityIndex } from '@ivanzaida/structures'

/**
 * ENTITY:PLAY_SYNCHRONIZED_ENTITY_ANIM
 *
 * 0x381D671BCFC294D9

 * 
 * Use this to add an entity with a specifically authored anim to a synchronized scene created with CREATE_SYNCHRONIZED_SCENE
 * Note: as part of this process the entity's collision will be deactivated. To turn it back on again, use SET_ENTITY_COLLISION or pass
 * a true value to the ActivateCollision parameter of STOP_SYNCHRONISED_ENTITY_ANIM.
 * 
 * p4 and p7 are usually 1000.0f.
 * 
 * Full list of animation dictionaries and anims by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animDictsCompact.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @param {number} sceneId
 * @param {string} animName
 * @param {string} animDictName
 * @param {number} blendInDelta
 * @param {number} blendOutDelta
 * @param {number} flags
 * @param {number} moverBlendInDelta
 * @returns {boolean}  
 */
export function playSynchronizedEntityAnim(entity: EntityIndex, sceneId: number, animName: string, animDictName: string, blendInDelta: number, blendOutDelta: number = 8, flags: number = 0, moverBlendInDelta: number = 1000): boolean {
	const playSynchronizedEntityAnim_result = Citizen.invokeNative<boolean>('0x381D671BCFC294D9', entity, sceneId, animName, animDictName, blendInDelta, blendOutDelta, flags, moverBlendInDelta);
	return playSynchronizedEntityAnim_result;
}