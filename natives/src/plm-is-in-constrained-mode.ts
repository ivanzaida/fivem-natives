/**
 * MISC:PLM_IS_IN_CONSTRAINED_MODE
 *
 * 0x5318F44DB7A13F50

 * 
 * Returns true if we're in the constrained PLM (Process Lifetime Management) mode (executing with reduced CPU/GPU allocation)
 * 
 * aka "constrained"
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function plmIsInConstrainedMode(): boolean {
	const plmIsInConstrainedMode_result = Citizen.invokeNative<boolean>('0x5318F44DB7A13F50', );
	return plmIsInConstrainedMode_result;
}