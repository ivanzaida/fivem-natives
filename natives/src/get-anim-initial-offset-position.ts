import { EEulerRotOrder, Vector3 } from '@ivanzaida/structures'

/**
 * PED:GET_ANIM_INITIAL_OFFSET_POSITION
 *
 * 0xBE8776D2466E9EA6

 * Used when playing multiple anims together using TASK_PLAY_ANIM. This function returns the position offset
 * that will be automatically applied when playing the specified anim using the anim flag AF_EXTRACT_INITIAL_OFFSET
 * from the initial position and orientation specified
 * Full list of animation dictionaries and anims by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animDictsCompact.json
 * 
 * ------------------------------------------------------------------
 * @param {string} animDictName
 * @param {string} animName
 * @param {number} scenePositionX
 * @param {number} scenePositionY
 * @param {number} scenePositionZ
 * @param {number} sceneOrientationX
 * @param {number} sceneOrientationY
 * @param {number} sceneOrientationZ
 * @param {number} phase
 * @param {EEulerRotOrder} rotOrder
 * @returns {Vector3}  
 */
export function getAnimInitialOffsetPosition(animDictName: string, animName: string, scenePositionX: number, scenePositionY: number, scenePositionZ: number, sceneOrientationX: number, sceneOrientationY: number, sceneOrientationZ: number, phase: number = 0, rotOrder: EEulerRotOrder | number = 2): Vector3 {
	const getAnimInitialOffsetPosition_result = Citizen.invokeNative<Vector3>('0xBE8776D2466E9EA6', animDictName, animName, scenePositionX, scenePositionY, scenePositionZ, sceneOrientationX, sceneOrientationY, sceneOrientationZ, phase, rotOrder);
	return getAnimInitialOffsetPosition_result;
}