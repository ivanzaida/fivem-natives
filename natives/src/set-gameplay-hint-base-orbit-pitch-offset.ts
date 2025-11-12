/**
 * CAM:SET_GAMEPLAY_HINT_BASE_ORBIT_PITCH_OFFSET
 *
 * 0x6CD2A2994586D388

 * 
 * Call at the start of the hint to avoid pops.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} basePitchOffset
 */
export function setGameplayHintBaseOrbitPitchOffset(basePitchOffset: number): void {
	const setGameplayHintBaseOrbitPitchOffset_result = Citizen.invokeNative<void>('0x6CD2A2994586D388', basePitchOffset);
	return setGameplayHintBaseOrbitPitchOffset_result;
}