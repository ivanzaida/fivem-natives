import { ETvchanneltype } from '@ivanzaida/structures'

/**
 * GRAPHICS:CLEAR_TV_CHANNEL_PLAYLIST
 *
 * 0xF03C7B57F88A5BD3

 * 
 * ------------------------------------------------------------------
 * @param {ETvchanneltype} channel
 */
export function clearTvChannelPlaylist(channel: ETvchanneltype | number): void {
	const clearTvChannelPlaylist_result = Citizen.invokeNative<void>('0xF03C7B57F88A5BD3', channel);
	return clearTvChannelPlaylist_result;
}