/**
 * DATAFILE:DATAFILE_STORE_MISSION_HEADER
 *
 * 0x16AC7DBD0702DC76

 * 
 * ------------------------------------------------------------------
 * @param {number} datafile Index  Which datafile to take data from
 */
export function datafileStoreMissionHeader(datafile: number = 0): void {
	const datafileStoreMissionHeader_result = Citizen.invokeNative<void>('0x16AC7DBD0702DC76', datafile);
	return datafileStoreMissionHeader_result;
}