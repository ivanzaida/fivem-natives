import { BlipIndex } from '@ivanzaida/structures'

/**
 * HUD:SET_BLIP_EXTENDED_HEIGHT_THRESHOLD
 *
 * 0xC4F090C2EC0D0FBF

 * 
 * Must be toggled before being queued for animation
 * 
 * 
 * ------------------------------------------------------------------
 * @param {BlipIndex} blip
 * @param {boolean} useExtendedHeightThreshold
 */
export function setBlipExtendedHeightThreshold(blip: BlipIndex, useExtendedHeightThreshold: boolean): void {
	const setBlipExtendedHeightThreshold_result = Citizen.invokeNative<void>('0xC4F090C2EC0D0FBF', blip, useExtendedHeightThreshold);
	return setBlipExtendedHeightThreshold_result;
}