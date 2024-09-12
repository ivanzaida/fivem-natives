/**
 * NETWORK:UGC_SET_QUERY_DATA_FROM_OFFLINE
 *
 * 0xB79F7D662E0B7885

 * 
 * ------------------------------------------------------------------
 * @param {boolean} fromOffline
 */
export function ugcSetQueryDataFromOffline(fromOffline: boolean): void {
	const ugcSetQueryDataFromOffline_result = Citizen.invokeNative<void>('0xB79F7D662E0B7885', fromOffline);
	return ugcSetQueryDataFromOffline_result;
}