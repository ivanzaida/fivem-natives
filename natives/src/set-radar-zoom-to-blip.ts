import { BlipIndex } from '@ivanzaida/structures'

/**
 * HUD:SET_RADAR_ZOOM_TO_BLIP
 *
 * 0x0F16C412C8DE5D52

 * 
 * Must be called every frame - keeps it locked to a blip
 * 
 * 
 * ------------------------------------------------------------------
 * @param {BlipIndex} blip
 * @param {number} offset
 */
export function setRadarZoomToBlip(blip: BlipIndex, offset: number = 0): void {
	const setRadarZoomToBlip_result = Citizen.invokeNative<void>('0x0F16C412C8DE5D52', blip, offset);
	return setRadarZoomToBlip_result;
}