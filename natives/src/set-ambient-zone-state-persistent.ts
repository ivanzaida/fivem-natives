/**
 * AUDIO:SET_AMBIENT_ZONE_STATE_PERSISTENT
 *
 * 0xCD04ECE71F3A9215

 * 
 * Full list of ambient zones by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/ambientZones.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} zoneName
 * @param {boolean} enabled
 * @param {boolean} forceUpdate
 */
export function setAmbientZoneStatePersistent(zoneName: string, enabled: boolean, forceUpdate: boolean = false): void {
	const setAmbientZoneStatePersistent_result = Citizen.invokeNative<void>('0xCD04ECE71F3A9215', zoneName, enabled, forceUpdate);
	return setAmbientZoneStatePersistent_result;
}