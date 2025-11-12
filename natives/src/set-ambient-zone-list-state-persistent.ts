/**
 * AUDIO:SET_AMBIENT_ZONE_LIST_STATE_PERSISTENT
 *
 * 0x6866AF3D8691EDC0

 * 
 * Full list of ambient zones by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/ambientZones.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} zoneListName
 * @param {boolean} enabled
 * @param {boolean} forceUpdate
 */
export function setAmbientZoneListStatePersistent(zoneListName: string, enabled: boolean, forceUpdate: boolean = false): void {
	const setAmbientZoneListStatePersistent_result = Citizen.invokeNative<void>('0x6866AF3D8691EDC0', zoneListName, enabled, forceUpdate);
	return setAmbientZoneListStatePersistent_result;
}