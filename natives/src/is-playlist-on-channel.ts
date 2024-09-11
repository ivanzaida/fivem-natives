import { ETvchanneltype } from '@ivanzaida/structures'

/**
 * GRAPHICS:IS_PLAYLIST_ON_CHANNEL
 *
 * 0xF03BF645614F3175

 * 
 * ------------------------------------------------------------------
 * @param {ETvchanneltype} channel
 * @param {number} nameHash
 * @returns {boolean}  
 */
export function isPlaylistOnChannel(channel: ETvchanneltype | number, nameHash: number): boolean {
	const isPlaylistOnChannel_result = Citizen.invokeNative<boolean>('0xF03BF645614F3175', channel, nameHash);
	return isPlaylistOnChannel_result;
}