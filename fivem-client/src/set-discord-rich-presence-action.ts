/**
 * CFX:SET_DISCORD_RICH_PRESENCE_ACTION
 *
 * 0XCBBC3FAC

 * Sets a clickable button to be displayed in a player's Discord rich presence.
 * 
 * ------------------------------------------------------------------
 * @param {number} index The button index, either 0 or 1.
 * @param {string} label The text to display on the button.
 * @param {string} url The URL to open when clicking the button. This has to start with fivem
 */
export function setDiscordRichPresenceAction(index: number, label: string, url: string): void {
	const setDiscordRichPresenceAction_result = Citizen.invokeNative<void>('0XCBBC3FAC', index, label, url);
	return setDiscordRichPresenceAction_result;
}