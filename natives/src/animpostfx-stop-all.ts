/**
 * GRAPHICS:ANIMPOSTFX_STOP_ALL
 *
 * 0x7919995BD2B8745C

 * 
 * Stops ALL currently playing effects.
 * 
 * 
 * ------------------------------------------------------------------
 */
export function animpostfxStopAll(): void {
	const animpostfxStopAll_result = Citizen.invokeNative<void>('0x7919995BD2B8745C', );
	return animpostfxStopAll_result;
}