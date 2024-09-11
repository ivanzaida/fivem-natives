import { ObjectIndex } from '@ivanzaida/structures'

/**
 * OBJECT:PLAY_OBJECT_AUTO_START_ANIM
 *
 * 0x8F07CC6637F60B7F

 * 
 * ------------------------------------------------------------------
 * @param {ObjectIndex} object
 */
export function playObjectAutoStartAnim(object: ObjectIndex): void {
	const playObjectAutoStartAnim_result = Citizen.invokeNative<void>('0x8F07CC6637F60B7F', object);
	return playObjectAutoStartAnim_result;
}