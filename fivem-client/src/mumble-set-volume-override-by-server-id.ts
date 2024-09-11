/**
 * CFX:MUMBLE_SET_VOLUME_OVERRIDE_BY_SERVER_ID
 *
 * 0XCE8E25B4

 * Overrides the output volume for a particular player with the specified server id and player name on Mumble. This will also bypass 3D audio and distance calculations. -1.0 to reset the override.
 * 
 * ------------------------------------------------------------------
 * @param {number} serverId The player's server id.
 * @param {number} volume The volume, ranging from 0.0 to 1.0 (or above).
 */
export function mumbleSetVolumeOverrideByServerId(serverId: number, volume: number): void {
	const mumbleSetVolumeOverrideByServerId_result = Citizen.invokeNative<void>('0XCE8E25B4', serverId, volume);
	return mumbleSetVolumeOverrideByServerId_result;
}