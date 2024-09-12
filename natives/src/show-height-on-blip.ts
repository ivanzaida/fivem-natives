import { BlipIndex } from '@ivanzaida/structures'

/**
 * HUD:SHOW_HEIGHT_ON_BLIP
 *
 * 0x89FE619BFBB2024B

 * 
 * ------------------------------------------------------------------
 * @param {BlipIndex} blip
 * @param {boolean} showHeight
 */
export function showHeightOnBlip(blip: BlipIndex, showHeight: boolean): void {
	const showHeightOnBlip_result = Citizen.invokeNative<void>('0x89FE619BFBB2024B', blip, showHeight);
	return showHeightOnBlip_result;
}