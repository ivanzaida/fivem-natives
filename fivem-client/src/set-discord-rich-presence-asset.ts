/**
 * CFX:SET_DISCORD_RICH_PRESENCE_ASSET
 *
 * 0X53DFD530

 * This native sets the image asset for the discord rich presence implementation.
 * 
 * ------------------------------------------------------------------
 * @param {string} assetName The name of a valid asset registered on Discordapp's developer dashboard. note that the asset has to be registered under the same discord API application set using the SET_DISCORD_APP_ID native.
 */
export function setDiscordRichPresenceAsset(assetName: string): void {
	const setDiscordRichPresenceAsset_result = Citizen.invokeNative<void>('0X53DFD530', assetName);
	return setDiscordRichPresenceAsset_result;
}