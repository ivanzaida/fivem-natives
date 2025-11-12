/**
 * GRAPHICS:ANIMPOSTFX_IS_RUNNING
 *
 * 0x47CB3D397940E783

 * 
 * Returns whether the specified effect is active.
 * See ANIMPOSTFX_PLAY
 * 
 * Full list of animpostFX / screen effects by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animPostFxNamesCompact.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} effectName
 * @returns {boolean}  
 */
export function animpostfxIsRunning(effectName: string): boolean {
	const animpostfxIsRunning_result = Citizen.invokeNative<boolean>('0x47CB3D397940E783', effectName);
	return animpostfxIsRunning_result;
}