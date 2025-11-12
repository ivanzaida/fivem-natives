/**
 * MISC:GET_SIZE_OF_SAVE_DATA
 *
 * 0x7E1CF25229CF544D

 * 
 * Returns the size of the script data registered to be saved. You can compare this size with the size of the
 * overall structure of saved variables to check that all variables have been registered for saving.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} singlePlayer
 * @returns {number}  
 */
export function getSizeOfSaveData(singlePlayer: boolean): number {
	const getSizeOfSaveData_result = Citizen.invokeNative<number>('0x7E1CF25229CF544D', singlePlayer);
	return getSizeOfSaveData_result;
}