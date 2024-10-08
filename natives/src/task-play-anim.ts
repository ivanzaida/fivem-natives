import { PedIndex, EAnimationFlags, EIkControlFlags } from '@ivanzaida/structures'

/**
 * TASK:TASK_PLAY_ANIM
 *
 * 0x10425721983AE158

 * Plays an anim on the specified ped
 * Full list of animation dictionaries and anims by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animDictsCompact.json
 * float speed > normal speed is 8.0f
 * ----------------------
 * float speedMultiplier > multiply the playback speed
 * ----------------------
 * int duration: time in millisecond
 * ----------------------
 * -1 _ _ _ _ _ _ _> Default (see flag)
 * 0 _ _ _ _ _ _ _ > Not play at all
 * Small value _ _ > Slow down animation speed
 * Other _ _ _ _ _ > freeze player control until specific time (ms) has
 * _ _ _ _ _ _ _ _ _ passed. (No effect if flag is set to be
 * _ _ _ _ _ _ _ _ _ controllable.)
 * int flag:
 * ----------------------
 * enum eAnimationFlags
 * {
 *  ANIM_FLAG_NORMAL = 0,
 *    ANIM_FLAG_REPEAT = 1,
 *    ANIM_FLAG_STOP_LAST_FRAME = 2,
 *    ANIM_FLAG_UPPERBODY = 16,
 *    ANIM_FLAG_ENABLE_PLAYER_CONTROL = 32,
 *    ANIM_FLAG_CANCELABLE = 120,
 * };
 * Odd number : loop infinitely
 * Even number : Freeze at last frame
 * Multiple of 4: Freeze at last frame but controllable
 * 01 to 15 > Full body
 * 10 to 31 > Upper body
 * 32 to 47 > Full body > Controllable
 * 48 to 63 > Upper body > Controllable
 * ...
 * 001 to 255 > Normal
 * 256 to 511 > Garbled
 * ...
 * playbackRate:
 * values are between 0.0 and 1.0
 * lockX:
 * 0 in most cases 1 for rcmepsilonism8 and rcmpaparazzo_3
 * > 1 for mini@sprunk
 * lockY:
 * 0 in most cases
 * 1 for missfam5_yoga, missfra1mcs_2_crew_react
 * lockZ:
 *     0 for single player
 *     Can be 1 but only for MP
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {string} animDictName
 * @param {string} animName
 * @param {number} blendInDelta
 * @param {number} blendOutDelta
 * @param {number} timeToPlay
 * @param {EAnimationFlags} animFlags
 * @param {number} startPhase
 * @param {boolean} phaseControlled
 * @param {EIkControlFlags} ikFlags
 * @param {boolean} allowOverrideCloneUpdate
 */
export function taskPlayAnim(ped: PedIndex, animDictName: string, animName: string, blendInDelta: number = 8, blendOutDelta: number = 8, timeToPlay: number = 1, animFlags: EAnimationFlags | number = 0, startPhase: number = 0, phaseControlled: boolean = false, ikFlags: EIkControlFlags | number = 0, allowOverrideCloneUpdate: boolean = false): void {
	const taskPlayAnim_result = Citizen.invokeNative<void>('0x10425721983AE158', ped, animDictName, animName, blendInDelta, blendOutDelta, timeToPlay, animFlags, startPhase, phaseControlled, ikFlags, allowOverrideCloneUpdate);
	return taskPlayAnim_result;
}