import { EControlType } from '@ivanzaida/structures'

/**
 * PAD:IS_USING_REMOTE_PLAY
 *
 * 0xF4E95755715FE93D

 * 
 * control: see IS_CONTROL_ENABLED
 * 
 * Hardcoded to return false.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EControlType} control
 * @returns {boolean}  
 */
export function isUsingRemotePlay(control: EControlType | number): boolean {
	const isUsingRemotePlay_result = Citizen.invokeNative<boolean>('0xF4E95755715FE93D', control);
	return isUsingRemotePlay_result;
}