/**
 * AUDIO:SET_AMBIENT_ZONE_LIST_STATE
 *
 * 0xAE9B78A0E33292A8

 * 
 * ------------------------------------------------------------------
 * @param {string} zoneListName
 * @param {boolean} enabled
 * @param {boolean} forceUpdate
 */
export function setAmbientZoneListState(zoneListName: string, enabled: boolean, forceUpdate: boolean = false): void {
	const setAmbientZoneListState_result = Citizen.invokeNative<void>('0xAE9B78A0E33292A8', zoneListName, enabled, forceUpdate);
	return setAmbientZoneListState_result;
}