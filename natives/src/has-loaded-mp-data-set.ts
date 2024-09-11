/**
 * AUDIO:HAS_LOADED_MP_DATA_SET
 *
 * 0x12E01CD1D5C72213

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function hasLoadedMpDataSet(): boolean {
	const hasLoadedMpDataSet_result = Citizen.invokeNative<boolean>('0x12E01CD1D5C72213', );
	return hasLoadedMpDataSet_result;
}