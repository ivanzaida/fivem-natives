/**
 * GRAPHICS:ANIMPOSTFX_GET_CURRENT_TIME
 *
 * 0xF854E7F9C196DEFE

 * 
 * See ANIMPOSTFX_PLAY
 * 
 * Full list of animpostFX / screen effects by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animPostFxNamesCompact.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} effectName
 * @returns {number}  
 */
export function animpostfxGetCurrentTime(effectName: string): number {
	const animpostfxGetCurrentTime_result = Citizen.invokeNative<number>('0xF854E7F9C196DEFE', effectName);
	return animpostfxGetCurrentTime_result;
}