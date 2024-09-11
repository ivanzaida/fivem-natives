/**
 * DATAFILE:DATAFILE_CREATE
 *
 * 0x87BA8B7277ED162C

 * 
 * ------------------------------------------------------------------
 * @param {number} datafile
 */
export function datafileCreate(datafile: number = 0): void {
	const datafileCreate_result = Citizen.invokeNative<void>('0x87BA8B7277ED162C', datafile);
	return datafileCreate_result;
}