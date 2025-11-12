import { BlipIndex } from '@ivanzaida/structures'

/**
 * HUD:SET_RADIUS_BLIP_EDGE
 *
 * 0x641FCCDF2824DCFD

 * 
 * Enabling this on a radius blip will make it outline only. See https://cdn.discordapp.com/attachments/553235301632573459/575132227935928330/unknown.png
 * 
 * 
 * ------------------------------------------------------------------
 * @param {BlipIndex} blip
 * @param {boolean} edge
 */
export function setRadiusBlipEdge(blip: BlipIndex, edge: boolean): void {
	const setRadiusBlipEdge_result = Citizen.invokeNative<void>('0x641FCCDF2824DCFD', blip, edge);
	return setRadiusBlipEdge_result;
}