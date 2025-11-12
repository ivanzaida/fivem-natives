/**
 * GRAPHICS:RESET_ADAPTATION
 *
 * 0xE3349610A15FA0D0

 * 
 * Sets an value related to timecycles.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} numFrames Default number of frames to reset for is 1
 */
export function resetAdaptation(numFrames: number = 6): void {
	const resetAdaptation_result = Citizen.invokeNative<void>('0xE3349610A15FA0D0', numFrames);
	return resetAdaptation_result;
}