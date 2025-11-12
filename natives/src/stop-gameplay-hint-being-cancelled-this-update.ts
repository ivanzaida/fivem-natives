/**
 * CAM:STOP_GAMEPLAY_HINT_BEING_CANCELLED_THIS_UPDATE
 *
 * 0xB0325D55FDB2DD7C

 * 
 * This native does absolutely nothing, just a nullsub
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} cancel
 */
export function stopGameplayHintBeingCancelledThisUpdate(cancel: boolean): void {
	const stopGameplayHintBeingCancelledThisUpdate_result = Citizen.invokeNative<void>('0xB0325D55FDB2DD7C', cancel);
	return stopGameplayHintBeingCancelledThisUpdate_result;
}