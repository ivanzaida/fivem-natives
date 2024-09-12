import { EHudColours } from '@ivanzaida/structures'

/**
 * HUD:TRIGGER_SONAR_BLIP
 *
 * 0xEECAD62659A58BDE

 * 
 * ------------------------------------------------------------------
 * @param {number} coorsX
 * @param {number} coorsY
 * @param {number} coorsZ
 * @param {number} noiseRange
 * @param {EHudColours} colour
 */
export function triggerSonarBlip(coorsX: number, coorsY: number, coorsZ: number, noiseRange: number, colour: EHudColours | number): void {
	const triggerSonarBlip_result = Citizen.invokeNative<void>('0xEECAD62659A58BDE', coorsX, coorsY, coorsZ, noiseRange, colour);
	return triggerSonarBlip_result;
}