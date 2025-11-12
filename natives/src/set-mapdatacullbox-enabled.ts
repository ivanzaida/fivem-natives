/**
 * STREAMING:SET_MAPDATACULLBOX_ENABLED
 *
 * 0x8BAB92052AD69AC5

 * 
 * Artists place cull boxes into the map to help eliminate map sections when the player
 * is within the box - this command is used to enable or disable them, referred to by name.
 * This could in turn be used to do things like hide or show the entire map etc.
 * Sets a named IPL cull box to be enabled or not
 * 
 * Possible p0 values:
 * 
 * "prologue"
 * "Prologue_Main"
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} boxName
 * @param {boolean} enabled
 */
export function setMapdatacullboxEnabled(boxName: string, enabled: boolean): void {
	const setMapdatacullboxEnabled_result = Citizen.invokeNative<void>('0x8BAB92052AD69AC5', boxName, enabled);
	return setMapdatacullboxEnabled_result;
}