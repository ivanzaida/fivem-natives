/**
 * AUDIO:SET_AMBIENT_ZONE_STATE
 *
 * 0x57FF2FF5DA6DCB15

 * 
 * Full list of ambient zones by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/ambientZones.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} zoneName
 * @param {boolean} enabled
 * @param {boolean} forceUpdate
 */
export function setAmbientZoneState(zoneName: string, enabled: boolean, forceUpdate: boolean = false): void {
	const setAmbientZoneState_result = Citizen.invokeNative<void>('0x57FF2FF5DA6DCB15', zoneName, enabled, forceUpdate);
	return setAmbientZoneState_result;
}