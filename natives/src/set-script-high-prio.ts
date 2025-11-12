/**
 * MISC:SET_SCRIPT_HIGH_PRIO
 *
 * 0x21EA3DC8C16770EF

 * 
 * Sets GtaThread+0x14A
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} highPrio
 */
export function setScriptHighPrio(highPrio: boolean): void {
	const setScriptHighPrio_result = Citizen.invokeNative<void>('0x21EA3DC8C16770EF', highPrio);
	return setScriptHighPrio_result;
}