/**
 * PATHFIND:SET_GPS_DISABLED_ZONE_AT_INDEX
 *
 * 0xAAD42D6F976511F9

 * 
 * Defines a rectangular zone which the GPS will not pathfind through and inserts it at index provided
 * 
 * Disables the GPS route displayed on the minimap while within a certain zone (area). When in a disabled zone and creating a waypoint, the GPS route is not shown on the minimap until you are outside of the zone. When disabled, the direct distance is shown on minimap opposed to distance to travel. Seems to only work before setting a waypoint.
 * You can clear the disabled zone with CLEAR_GPS_DISABLED_ZONE_AT_INDEX.
 * 
 * Setting a waypoint at the same coordinate:
 * Disabled Zone: https://i.imgur.com/P9VUuxM.png
 * Enabled Zone (normal): https://i.imgur.com/BPi24aw.png
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} minX
 * @param {number} minY
 * @param {number} minZ
 * @param {number} maxX
 * @param {number} maxY
 * @param {number} maxZ
 * @param {number} index
 */
export function setGpsDisabledZoneAtIndex(minX: number, minY: number, minZ: number, maxX: number, maxY: number, maxZ: number, index: number): void {
	const setGpsDisabledZoneAtIndex_result = Citizen.invokeNative<void>('0xAAD42D6F976511F9', minX, minY, minZ, maxX, maxY, maxZ, index);
	return setGpsDisabledZoneAtIndex_result;
}