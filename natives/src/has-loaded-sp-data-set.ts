/**
 * AUDIO:HAS_LOADED_SP_DATA_SET
 *
 * 0x369A4B2B92F12461

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function hasLoadedSpDataSet(): boolean {
	const hasLoadedSpDataSet_result = Citizen.invokeNative<boolean>('0x369A4B2B92F12461', );
	return hasLoadedSpDataSet_result;
}