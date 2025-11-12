import { PedIndex } from '@ivanzaida/structures'

/**
 * CFX:TASK_PLAY_ANIM_ADVANCED
 *
 * 0x3DDEB0E6

 * 
 * As for task_play_anim, but provides the function to specify an inital position and rotation to playback the anim from
 * 
 * It's similar to TASK_PLAY_ANIM, except the first 6 floats let you specify the initial position and rotation of the task. (Ped gets teleported to the position).
 * 
 * Full list of animation dictionaries and anims by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animDictsCompact.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped The ped you want to play the animation
 * @param {string} animDictionary The animation dictionary
 * @param {string} animationName The animation name
 * @param {number} posX Initial X position of the task
 * @param {number} posY Initial Y position of the task
 * @param {number} posZ Initial Z position of the task
 * @param {number} rotX Initial X rotation of the task
 * @param {number} rotY Initial Y rotation of the task
 * @param {number} rotZ Initial Z rotation of the task
 * @param {number} blendInSpeed The speed at which the animation blends in. Lower is slower and higher is faster, 1.0 is normal, 8.0 is basically instant
 * @param {number} blendOutSpeed The speed at which the animation blends out. Lower is slower and higher is faster, 1.0 is normal, 8.0 is basically instant
 * @param {number} duration The duration of the animation in milliseconds. 1 will play the animation until canceled
 * @param {any} flag See [TASK_PLAY_ANIM](\_0xEA47FE3719165B94)
 * @param {number} animTime Value between 0.0 and 1.0, lets you start an animation from the given point
 * @param {any} p14
 * @param {any} p15
 */
export function taskPlayAnimAdvanced(ped: PedIndex, animDictionary: string, animationName: string, posX: number, posY: number, posZ: number, rotX: number, rotY: number, rotZ: number, blendInSpeed: number, blendOutSpeed: number, duration: number, flag: any, animTime: number, p14: any, p15: any): void {
	const taskPlayAnimAdvanced_result = Citizen.invokeNative<void>('0x3DDEB0E6', ped, animDictionary, animationName, posX, posY, posZ, rotX, rotY, rotZ, blendInSpeed, blendOutSpeed, duration, flag, animTime, p14, p15);
	return taskPlayAnimAdvanced_result;
}