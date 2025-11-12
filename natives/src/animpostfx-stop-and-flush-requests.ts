/**
 * GRAPHICS:ANIMPOSTFX_STOP_AND_FLUSH_REQUESTS
 *
 * 0x8A9BBDEAE0867331

 * 
 * Stops the effect and sets a value (bool) in its data (+0x199) to false.
 * See ANIMPOSTFX_PLAY
 * 
 * Full list of animpostFX / screen effects by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animPostFxNamesCompact.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} effectName
 */
export function animpostfxStopAndFlushRequests(effectName: string): void {
	const animpostfxStopAndFlushRequests_result = Citizen.invokeNative<void>('0x8A9BBDEAE0867331', effectName);
	return animpostfxStopAndFlushRequests_result;
}