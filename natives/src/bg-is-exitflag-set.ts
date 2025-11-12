/**
 * SCRIPT:BG_IS_EXITFLAG_SET
 *
 * 0x8FCC41E6E43728AA

 * 
 * Returns true if bit 0 in GtaThread+0x154 is set.
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function bgIsExitflagSet(): boolean {
	const bgIsExitflagSet_result = Citizen.invokeNative<boolean>('0x8FCC41E6E43728AA', );
	return bgIsExitflagSet_result;
}