import { EntityIndex } from '@ivanzaida/structures'

/**
 * ENTITY:PLAY_ENTITY_ANIM
 *
 * 0x5ED9595F4AC7D134

 * 
 * delta and bitset are guessed fields. They are based on the fact that most of the calls have 0 or nil field types passed in.
 * 
 * The only time bitset has a value is 0x4000 and the only time delta has a value is during stealth with usually <1.0f values.
 * 
 * Full list of animation dictionaries and anims by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animDictsCompact.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @param {string} animName
 * @param {string} animDictName
 * @param {number} blendDelta
 * @param {boolean} loop
 * @param {boolean} holdLastFrame
 * @param {boolean} driveToPose Enable drivetopose for the animation (object must be setup with articulation for this to work)
 * @param {number} startPhase
 * @param {number} animFlags
 * @returns {boolean}  
 */
export function playEntityAnim(entity: EntityIndex, animName: string, animDictName: string, blendDelta: number, loop: boolean, holdLastFrame: boolean, driveToPose: boolean = false, startPhase: number = 0, animFlags: number = 0): boolean {
	const playEntityAnim_result = Citizen.invokeNative<boolean>('0x5ED9595F4AC7D134', entity, animName, animDictName, blendDelta, loop, holdLastFrame, driveToPose, startPhase, animFlags);
	return playEntityAnim_result;
}