/**
 * DATAFILE:DATAFILE_DELETE_FOR_ADDITIONAL_DATA_FILE
 *
 * 0xEFE2DF6B67066118

 * 
 * ------------------------------------------------------------------
 * @param {number} file
 */
export function datafileDeleteForAdditionalDataFile(file: number): void {
	const datafileDeleteForAdditionalDataFile_result = Citizen.invokeNative<void>('0xEFE2DF6B67066118', file);
	return datafileDeleteForAdditionalDataFile_result;
}