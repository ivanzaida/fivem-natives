/**
 * PLAYER:START_FIRING_AMNESTY
 *
 * 0x97915D82C999021F

 * 
 * This should be called when a mission is passed or on autosave.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} duration
 */
export function startFiringAmnesty(duration: number = 5000): void {
	const startFiringAmnesty_result = Citizen.invokeNative<void>('0x97915D82C999021F', duration);
	return startFiringAmnesty_result;
}