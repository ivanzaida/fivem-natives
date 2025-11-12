/**
 * PLAYER:RESET_LAW_RESPONSE_DELAY_OVERRIDE
 *
 * 0x2FE39C7786330945

 * 
 * 2 matches in 1 script - am_hold_up
 * 
 * Used in multiplayer scripts?
 * 
 * 
 * ------------------------------------------------------------------
 */
export function resetLawResponseDelayOverride(): void {
	const resetLawResponseDelayOverride_result = Citizen.invokeNative<void>('0x2FE39C7786330945', );
	return resetLawResponseDelayOverride_result;
}