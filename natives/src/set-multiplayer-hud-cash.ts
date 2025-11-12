/**
 * HUD:SET_MULTIPLAYER_HUD_CASH
 *
 * 0xAD9A5C40381FE51A

 * 
 * This native does absolutely nothing, just a nullsub
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} cash
 * @param {boolean} forever
 */
export function setMultiplayerHudCash(cash: number, forever: boolean = false): void {
	const setMultiplayerHudCash_result = Citizen.invokeNative<void>('0xAD9A5C40381FE51A', cash, forever);
	return setMultiplayerHudCash_result;
}