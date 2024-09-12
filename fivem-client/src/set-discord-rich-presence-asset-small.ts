/**
 * CFX:SET_DISCORD_RICH_PRESENCE_ASSET_SMALL
 *
 * 0XF61D04C4

 * This native sets the small image asset for the discord rich presence implementation.
 * 
 * ------------------------------------------------------------------
 * @param {string} assetName The name of a valid asset registered on Discordapp's developer dashboard. Note that the asset has to be registered under the same discord API application set using the SET_DISCORD_APP_ID native.
 */
export function setDiscordRichPresenceAssetSmall(assetName: string): void {
	const setDiscordRichPresenceAssetSmall_result = Citizen.invokeNative<void>('0XF61D04C4', assetName);
	return setDiscordRichPresenceAssetSmall_result;
}