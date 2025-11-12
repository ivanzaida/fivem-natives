/**
 * GRAPHICS:ANIMPOSTFX_PLAY
 *
 * 0xDCAFFD08A08087EB

 * 
 * duration - is how long to play the effect for in milliseconds. If 0, it plays the default length
 * if loop is true, the effect won't stop until you call ANIMPOSTFX_STOP on it. (only loopable effects)
 * 
 * Full list of animpostFX / screen effects by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animPostFxNamesCompact.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} effectName
 * @param {number} durationMs
 * @param {boolean} playLooped
 */
export function animpostfxPlay(effectName: string, durationMs: number, playLooped: boolean): void {
	const animpostfxPlay_result = Citizen.invokeNative<void>('0xDCAFFD08A08087EB', effectName, durationMs, playLooped);
	return animpostfxPlay_result;
}