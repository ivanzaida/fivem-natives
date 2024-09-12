import { ETvchanneltype } from '@ivanzaida/structures'

/**
 * GRAPHICS:SET_TV_CHANNEL_PLAYLIST_AT_HOUR
 *
 * 0x836D2C7CBC0248D9

 * 
 * ------------------------------------------------------------------
 * @param {ETvchanneltype} channel
 * @param {string} playlistName
 * @param {number} hour
 */
export function setTvChannelPlaylistAtHour(channel: ETvchanneltype | number, playlistName: string, hour: number): void {
	const setTvChannelPlaylistAtHour_result = Citizen.invokeNative<void>('0x836D2C7CBC0248D9', channel, playlistName, hour);
	return setTvChannelPlaylistAtHour_result;
}