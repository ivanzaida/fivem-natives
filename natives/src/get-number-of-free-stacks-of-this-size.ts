/**
 * MISC:GET_NUMBER_OF_FREE_STACKS_OF_THIS_SIZE
 *
 * 0x546238515F929872

 * 
 * ------------------------------------------------------------------
 * @param {number} stackSize
 * @returns {number}  
 */
export function getNumberOfFreeStacksOfThisSize(stackSize: number): number {
	const getNumberOfFreeStacksOfThisSize_result = Citizen.invokeNative<number>('0x546238515F929872', stackSize);
	return getNumberOfFreeStacksOfThisSize_result;
}