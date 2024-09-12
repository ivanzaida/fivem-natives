/**
 * AUDIO:CLEAR_AMBIENT_ZONE_LIST_STATE
 *
 * 0x884A5994C1CC6222

 * 
 * ------------------------------------------------------------------
 * @param {string} zoneListName
 * @param {boolean} forceUpdate
 */
export function clearAmbientZoneListState(zoneListName: string, forceUpdate: boolean = false): void {
	const clearAmbientZoneListState_result = Citizen.invokeNative<void>('0x884A5994C1CC6222', zoneListName, forceUpdate);
	return clearAmbientZoneListState_result;
}