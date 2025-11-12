/**
 * STREAMING:SET_SRL_LONG_JUMP_MODE
 *
 * 0x6BD0E2C3AF4FF666

 * 
 * Enable or disable Long Jump Mode for cutscenes. This should be enabled if the cutscene involves camera cuts across long distances.
 * Call this right after calling PREFETCH_SRL().
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} enableLongJumpMode
 */
export function setSrlLongJumpMode(enableLongJumpMode: boolean): void {
	const setSrlLongJumpMode_result = Citizen.invokeNative<void>('0x6BD0E2C3AF4FF666', enableLongJumpMode);
	return setSrlLongJumpMode_result;
}