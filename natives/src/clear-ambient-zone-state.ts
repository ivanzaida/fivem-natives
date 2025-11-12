/**
 * AUDIO:CLEAR_AMBIENT_ZONE_STATE
 *
 * 0xA9B69A9A9C786B86

 * 
 * This function also has a p2, unknown. Signature AUDIO::CLEAR_AMBIENT_ZONE_STATE(const char zoneName, bool p1, Any p2);
 * 
 * Still needs more research.
 * 
 * Full list of ambient zones by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/ambientZones.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} zoneName
 * @param {boolean} forceUpdate
 */
export function clearAmbientZoneState(zoneName: string, forceUpdate: boolean = false): void {
	const clearAmbientZoneState_result = Citizen.invokeNative<void>('0xA9B69A9A9C786B86', zoneName, forceUpdate);
	return clearAmbientZoneState_result;
}