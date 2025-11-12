/**
 * STREAMING:GET_USED_CREATOR_BUDGET
 *
 * 0x77B41E941C2D2D17

 * 
 * 0.0 = no memory used
 * 1.0 = all memory used
 * 
 * Maximum model memory (as defined in common\data\missioncreatordata.meta) is 100 MiB
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getUsedCreatorBudget(): number {
	const getUsedCreatorBudget_result = Citizen.invokeNative<number>('0x77B41E941C2D2D17', );
	return getUsedCreatorBudget_result;
}