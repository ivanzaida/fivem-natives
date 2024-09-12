import { PedIndex } from '@ivanzaida/structures'

/**
 * CFX:TASK_PLAY_ANIM_ADVANCED
 *
 * 0x3DDEB0E6

 * As for task_play_anim, but provides the function to specify an inital position and rotation to playback the anim from
 * It's similar to TASK_PLAY_ANIM, except the first 6 floats let you specify the initial position and rotation of the task. (Ped gets teleported to the position).
 * Full list of animation dictionaries and anims by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animDictsCompact.json
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped The target ped
 * @param {string} animDict Name of the animation dictionary
 * @param {string} animName Name of the animation
 * @param {number} posX Initial X position of the task
 * @param {number} posY Initial Y position of the task
 * @param {number} posZ Initial Z position of the task
 * @param {number} rotX Initial X rotation of the task, doesn't seem to have any effect
 * @param {number} rotY Initial Y rotation of the task, doesn't seem to have any effect
 * @param {number} rotZ Initial Z rotation of the task
 * @param {number} animEnterSpeed Adjust character speed to fully enter animation
 * @param {number} animExitSpeed Adjust character speed to fully exit animation (useless ClearPedTasksImmediately() is called)
 * @param {number} duration Time in milliseconds
 * @param {any} flag
 * @param {number} animTime Value between 0.0 and 1.0, lets you start an animation from the given point
 * @param {any} p14
 * @param {any} p15
 */
export function taskPlayAnimAdvanced(ped: PedIndex, animDict: string, animName: string, posX: number, posY: number, posZ: number, rotX: number, rotY: number, rotZ: number, animEnterSpeed: number, animExitSpeed: number, duration: number, flag: any, animTime: number, p14: any, p15: any): void {
	const taskPlayAnimAdvanced_result = Citizen.invokeNative<void>('0x3DDEB0E6', ped, animDict, animName, posX, posY, posZ, rotX, rotY, rotZ, animEnterSpeed, animExitSpeed, duration, flag, animTime, p14, p15);
	return taskPlayAnimAdvanced_result;
}