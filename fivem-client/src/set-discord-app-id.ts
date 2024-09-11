/**
 * CFX:SET_DISCORD_APP_ID
 *
 * 0X6A02254D

 * This native sets the app id for the discord rich presence implementation.
 * 
 * ------------------------------------------------------------------
 * @param {string} appId A valid Discord API App Id, can be generated at https
 */
export function setDiscordAppId(appId: string): void {
	const setDiscordAppId_result = Citizen.invokeNative<void>('0X6A02254D', appId);
	return setDiscordAppId_result;
}