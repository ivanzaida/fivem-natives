/**
 * HUD:THEFEED_FREEZE_NEXT_POST
 *
 * 0x7C64D5DE5CA79A81

 * 
 * Requires manual management of game stream handles (i.e., 0xBE4390CB40B3E627).
 * 
 * 
 * ------------------------------------------------------------------
 */
export function thefeedFreezeNextPost(): void {
	const thefeedFreezeNextPost_result = Citizen.invokeNative<void>('0x7C64D5DE5CA79A81', );
	return thefeedFreezeNextPost_result;
}