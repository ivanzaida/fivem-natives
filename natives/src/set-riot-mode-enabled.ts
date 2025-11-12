/**
 * MISC:SET_RIOT_MODE_ENABLED
 *
 * 0x44182C1D103A97D2

 * 
 * Toggles riot mode
 * 
 * Activates (usused?) riot mode. All NPCs are being hostile to each other (including player). Also the game will give weapons (pistols, smgs) to random NPCs.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} enabled
 */
export function setRiotModeEnabled(enabled: boolean): void {
	const setRiotModeEnabled_result = Citizen.invokeNative<void>('0x44182C1D103A97D2', enabled);
	return setRiotModeEnabled_result;
}