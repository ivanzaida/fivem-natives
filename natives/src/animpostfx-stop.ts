/**
 * GRAPHICS:ANIMPOSTFX_STOP
 *
 * 0x21172E4DF035B893

 * 
 * See ANIMPOSTFX_PLAY
 * 
 * Full list of animpostFX / screen effects by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animPostFxNamesCompact.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} effectName
 */
export function animpostfxStop(effectName: string): void {
	const animpostfxStop_result = Citizen.invokeNative<void>('0x21172E4DF035B893', effectName);
	return animpostfxStop_result;
}