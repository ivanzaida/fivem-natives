/**
 * AUDIO:IS_AMBIENT_ZONE_ENABLED
 *
 * 0x80EEE4C5880DA82E

 * 
 * Full list of ambient zones by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/ambientZones.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} zoneName
 * @returns {boolean}  
 */
export function isAmbientZoneEnabled(zoneName: string): boolean {
	const isAmbientZoneEnabled_result = Citizen.invokeNative<boolean>('0x80EEE4C5880DA82E', zoneName);
	return isAmbientZoneEnabled_result;
}