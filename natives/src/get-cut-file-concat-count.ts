/**
 * CUTSCENE:GET_CUT_FILE_CONCAT_COUNT
 *
 * 0xF4D7464FFDD56FE3

 * 
 * Full list of cutscene names by DurtyFree https://github.com/DurtyFree/gta-v-data-dumps/blob/master/cutsceneNames.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} cutName
 * @returns {number}  
 */
export function getCutFileConcatCount(cutName: string): number {
	const getCutFileConcatCount_result = Citizen.invokeNative<number>('0xF4D7464FFDD56FE3', cutName);
	return getCutFileConcatCount_result;
}