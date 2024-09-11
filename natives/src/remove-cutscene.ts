/**
 * CUTSCENE:REMOVE_CUTSCENE
 *
 * 0xDD291722ADDCBD60

 * 
 * ------------------------------------------------------------------
 */
export function removeCutscene(): void {
	const removeCutscene_result = Citizen.invokeNative<void>('0xDD291722ADDCBD60', );
	return removeCutscene_result;
}