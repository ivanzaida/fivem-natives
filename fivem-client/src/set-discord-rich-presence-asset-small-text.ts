/**
 * CFX:SET_DISCORD_RICH_PRESENCE_ASSET_SMALL_TEXT
 *
 * 0X35E62B6A

 * This native sets the hover text of the small image asset for the discord rich presence implementation.
 * 
 * ------------------------------------------------------------------
 * @param {string} text Text to be displayed when hovering over small image asset. Note that you must also set a valid small image asset using the SET_DISCORD_RICH_PRESENCE_ASSET_SMALL native.
 */
export function setDiscordRichPresenceAssetSmallText(text: string): void {
	const setDiscordRichPresenceAssetSmallText_result = Citizen.invokeNative<void>('0X35E62B6A', text);
	return setDiscordRichPresenceAssetSmallText_result;
}