/**
 * DATAFILE:DATAFILE_CLEAR_WATCH_LIST
 *
 * 0x6CB3106C584382B9

 * 
 * ------------------------------------------------------------------
 */
export function datafileClearWatchList(): void {
	const datafileClearWatchList_result = Citizen.invokeNative<void>('0x6CB3106C584382B9', );
	return datafileClearWatchList_result;
}