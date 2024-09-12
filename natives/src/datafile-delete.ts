/**
 * DATAFILE:DATAFILE_DELETE
 *
 * 0x27DEA4A6845A22BC

 * 
 * ------------------------------------------------------------------
 * @param {number} datafile
 */
export function datafileDelete(datafile: number = 0): void {
	const datafileDelete_result = Citizen.invokeNative<void>('0x27DEA4A6845A22BC', datafile);
	return datafileDelete_result;
}