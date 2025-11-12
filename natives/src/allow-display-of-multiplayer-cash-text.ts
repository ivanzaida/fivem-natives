/**
 * HUD:ALLOW_DISPLAY_OF_MULTIPLAYER_CASH_TEXT
 *
 * 0x0DD2294269928A9E

 * 
 * Controls whether to display 'Cash'/'Bank' next to the money balance HUD in Multiplayer (https://i.imgur.com/MiYUtNl.png)
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} allow
 */
export function allowDisplayOfMultiplayerCashText(allow: boolean): void {
	const allowDisplayOfMultiplayerCashText_result = Citizen.invokeNative<void>('0x0DD2294269928A9E', allow);
	return allowDisplayOfMultiplayerCashText_result;
}