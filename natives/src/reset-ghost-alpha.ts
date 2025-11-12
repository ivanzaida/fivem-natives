/**
 * NETWORK:RESET_GHOST_ALPHA
 *
 * 0x1D6800242F1593FB

 * 
 * Resets the entity ghost alpha to the default value (128)
 * 
 * 
 * ------------------------------------------------------------------
 */
export function resetGhostAlpha(): void {
	const resetGhostAlpha_result = Citizen.invokeNative<void>('0x1D6800242F1593FB', );
	return resetGhostAlpha_result;
}