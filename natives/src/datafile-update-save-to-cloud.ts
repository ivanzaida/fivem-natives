import { BoolRef } from '@ivanzaida/structures'

/**
 * DATAFILE:DATAFILE_UPDATE_SAVE_TO_CLOUD
 *
 * 0x3CBCE367459737AD

 * 
 * ------------------------------------------------------------------
 * @param {BoolRef} success [Ref]
 * @returns {boolean}  
 */
export function datafileUpdateSaveToCloud(success: BoolRef /* ptr */): boolean {
	const datafileUpdateSaveToCloud_result = Citizen.invokeNative<boolean>('0x3CBCE367459737AD', success.dataView);
	return datafileUpdateSaveToCloud_result;
}