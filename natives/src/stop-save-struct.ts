/**
 * MISC:STOP_SAVE_STRUCT
 *
 * 0x648D295A649ED2C3

 * 
 * Each START_SAVE_STRUCT should be matched by a STOP_SAVE_STRUCT after you have called REGISTER_..._TO_SAVE
 * for each member variable that you want to save. You can save STRUCTs within STRUCTs.
 * 
 * 
 * ------------------------------------------------------------------
 */
export function stopSaveStruct(): void {
	const stopSaveStruct_result = Citizen.invokeNative<void>('0x648D295A649ED2C3', );
	return stopSaveStruct_result;
}