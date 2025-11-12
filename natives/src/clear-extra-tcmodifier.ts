/**
 * GRAPHICS:CLEAR_EXTRA_TCMODIFIER
 *
 * 0x15BEA5263EB7BF2A

 * 
 * Clears the secondary timecycle modifier usually set with _SET_EXTRA_TIMECYCLE_MODIFIER
 * 
 * 
 * ------------------------------------------------------------------
 */
export function clearExtraTcmodifier(): void {
	const clearExtraTcmodifier_result = Citizen.invokeNative<void>('0x15BEA5263EB7BF2A', );
	return clearExtraTcmodifier_result;
}