/**
 * MISC:START_SAVE_DATA
 *
 * 0xA2CDB686AB549D8A

 * 
 * Starts a new block of data. You must call this before calling any of the REGISTER_ commands
 * You must call STOP_SAVE_DATA after REGISTERing the saved variables and the start, registering and stop
 * have to be done in a single frame.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {DataView} structToSave [Ref]
 * @param {number} sizeOfStruct
 * @param {boolean} singlePlayer
 */
export function startSaveData(structToSave: DataView /* ptr */, sizeOfStruct: number, singlePlayer: boolean): void {
	const startSaveData_result = Citizen.invokeNative<void>('0xA2CDB686AB549D8A', structToSave, sizeOfStruct, singlePlayer);
	return startSaveData_result;
}