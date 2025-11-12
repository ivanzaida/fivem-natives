/**
 * MISC:STOP_SAVE_DATA
 *
 * 0xB6F769D890A34B99

 * 
 * Marks the end of a block of data that has been created by START_SAVE_DATA.
 * You must call STOP_SAVE_DATA after REGISTERing the saved variables and the start, registering and stop
 * have to be done in a single frame.
 * When STOP_SAVE_DATA is called, the code will look for any previously-loaded data for this script and write the
 * loaded values into the matching REGISTERed variables
 * 
 * 
 * ------------------------------------------------------------------
 */
export function stopSaveData(): void {
	const stopSaveData_result = Citizen.invokeNative<void>('0xB6F769D890A34B99', );
	return stopSaveData_result;
}