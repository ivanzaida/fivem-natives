import { ModelNames } from '@ivanzaida/structures'

/**
 * ENTITY:PLAY_SYNCHRONIZED_MAP_ENTITY_ANIM
 *
 * 0xB75A7F8E568F3BE6

 * 
 * Use this to add an entity with a specifically authored anim to a synchronized scene created with CREATE_SYNCHRONIZED_SCENE
 * Note: as part of this process the entity's collision will be deactivated. To turn it back on again, use SET_ENTITY_COLLISION or pass
 * a true value to the ActivateCollision parameter of STOP_SYNCHRONISED_ENTITY_ANIM.
 * 
 * p6,p7 probably animname and animdict
 * 
 * Full list of animation dictionaries and anims by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animDictsCompact.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} posX
 * @param {number} posY
 * @param {number} posZ
 * @param {number} radius
 * @param {ModelNames} modelHash
 * @param {number} sceneId
 * @param {string} animName
 * @param {string} animDictName
 * @param {number} blendDelta
 * @param {number} blendOutDelta
 * @param {number} flags
 * @param {number} moverBlendInDelta
 * @returns {boolean}  
 */
export function playSynchronizedMapEntityAnim(posX: number, posY: number, posZ: number, radius: number, modelHash: ModelNames, sceneId: number, animName: string, animDictName: string, blendDelta: number, blendOutDelta: number = 8, flags: number = 0, moverBlendInDelta: number = 1000): boolean {
	const playSynchronizedMapEntityAnim_result = Citizen.invokeNative<boolean>('0xB75A7F8E568F3BE6', posX, posY, posZ, radius, modelHash, sceneId, animName, animDictName, blendDelta, blendOutDelta, flags, moverBlendInDelta);
	return playSynchronizedMapEntityAnim_result;
}