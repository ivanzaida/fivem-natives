/**
 * SCRIPT:BG_SET_EXITFLAG_RESPONSE
 *
 * 0xC68B0868CFA1B72F

 * 
 * Sets bit 1 in GtaThread+0x154
 * 
 * 
 * ------------------------------------------------------------------
 */
export function bgSetExitflagResponse(): void {
	const bgSetExitflagResponse_result = Citizen.invokeNative<void>('0xC68B0868CFA1B72F', );
	return bgSetExitflagResponse_result;
}