import { PedIndex, EAnimationFlags, EEulerRotOrder, EIkControlFlags } from '@ivanzaida/structures'

/**
 * TASK:TASK_PLAY_ANIM_ADVANCED
 *
 * 0x9F5225AA1E102B7A

 * 
 * As for task_play_anim, but provides the function to specify an inital position and rotation to playback the anim from
 * 
 * It's similar to TASK_PLAY_ANIM, except the first 6 floats let you specify the initial position and rotation of the task. (Ped gets teleported to the position).
 * 
 * Full list of animation dictionaries and anims by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animDictsCompact.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {string} animDictName
 * @param {string} animName
 * @param {number} posX
 * @param {number} posY
 * @param {number} posZ
 * @param {number} rotX
 * @param {number} rotY
 * @param {number} rotZ
 * @param {number} blendInDelta
 * @param {number} blendOutDelta
 * @param {number} timeToPlay
 * @param {EAnimationFlags} animFlags
 * @param {number} startPhase
 * @param {EEulerRotOrder} rotOrder
 * @param {EIkControlFlags} ikFlags
 */
export function taskPlayAnimAdvanced(ped: PedIndex, animDictName: string, animName: string, posX: number, posY: number, posZ: number, rotX: number, rotY: number, rotZ: number, blendInDelta: number = 8, blendOutDelta: number = 8, timeToPlay: number = 1, animFlags: EAnimationFlags | number = 0, startPhase: number = 0, rotOrder: EEulerRotOrder | number = 2, ikFlags: EIkControlFlags | number = 0): void {
	const taskPlayAnimAdvanced_result = Citizen.invokeNative<void>('0x9F5225AA1E102B7A', ped, animDictName, animName, posX, posY, posZ, rotX, rotY, rotZ, blendInDelta, blendOutDelta, timeToPlay, animFlags, startPhase, rotOrder, ikFlags);
	return taskPlayAnimAdvanced_result;
}