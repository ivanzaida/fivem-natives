import { EEMpTag } from '@ivanzaida/structures'

/**
 * HUD:SET_MP_GAMER_TAG_ALPHA
 *
 * 0x4B82F311A9427C3F

 * 
 * Sets flag's sprite transparency. 0-255.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} playerNum
 * @param {EEMpTag} tag
 * @param {number} alpha
 */
export function setMpGamerTagAlpha(playerNum: number, tag: EEMpTag | number, alpha: number): void {
	const setMpGamerTagAlpha_result = Citizen.invokeNative<void>('0x4B82F311A9427C3F', playerNum, tag, alpha);
	return setMpGamerTagAlpha_result;
}