/**
 * GRAPHICS:_SET_TV_CHANNEL_PLAYLIST_DIRTY
 *
 * 0xEE831F15A8D0D94A

 * 
 * ------------------------------------------------------------------
 */
export function setTvChannelPlaylistDirty(): void {
	const setTvChannelPlaylistDirty_result = Citizen.invokeNative<void>('0xEE831F15A8D0D94A', );
	return setTvChannelPlaylistDirty_result;
}