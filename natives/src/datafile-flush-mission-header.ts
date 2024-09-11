/**
 * DATAFILE:DATAFILE_FLUSH_MISSION_HEADER
 *
 * 0x7D2CE2417CB2FE19

 * 
 * ------------------------------------------------------------------
 */
export function datafileFlushMissionHeader(): void {
	const datafileFlushMissionHeader_result = Citizen.invokeNative<void>('0x7D2CE2417CB2FE19', );
	return datafileFlushMissionHeader_result;
}