import { PlayerIndex } from '@ivanzaida/structures'

/**
 * CFX:MUMBLE_SET_VOLUME_OVERRIDE
 *
 * 0x61C309E3

 * Overrides the output volume for a particular player on Mumble. This will also bypass 3D audio and distance calculations. -1.0 to reset the override.Set to -1.0 to reset the Volume override.
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player A game player index.
 * @param {number} volume The volume, ranging from 0.0 to 1.0 (or above).
 */
export function mumbleSetVolumeOverride(player: PlayerIndex, volume: number): void {
	const mumbleSetVolumeOverride_result = Citizen.invokeNative<void>('0x61C309E3', player, volume);
	return mumbleSetVolumeOverride_result;
}