/**
 * CFX:SET_DISCORD_RICH_PRESENCE_ASSET_TEXT
 *
 * 0xB029D2FA

 * This native sets the hover text of the image asset for the discord rich presence implementation.
 * 
 * ------------------------------------------------------------------
 * @param {string} text Text to be displayed when hovering over image asset. Note that you must also set a valid image asset using the SET_DISCORD_RICH_PRESENCE_ASSET native.
 */
export function setDiscordRichPresenceAssetText(text: string): void {
	const setDiscordRichPresenceAssetText_result = Citizen.invokeNative<void>('0xB029D2FA', text);
	return setDiscordRichPresenceAssetText_result;
}