/**
 * MISC:STOP_SAVE_ARRAY
 *
 * 0x6C29B075C8530441

 * 
 * Each START_SAVE_ARRAY should be matched by a STOP_SAVE_ARRAY after you have called REGISTER_..._TO_SAVE
 * on the contents of the array.
 * 
 * 
 * ------------------------------------------------------------------
 */
export function stopSaveArray(): void {
	const stopSaveArray_result = Citizen.invokeNative<void>('0x6C29B075C8530441', );
	return stopSaveArray_result;
}