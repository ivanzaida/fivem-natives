/**
 * BRAIN:DISABLE_SCRIPT_BRAIN_SET
 *
 * 0xD17268F762AAD469

 * 
 * ------------------------------------------------------------------
 * @param {number} set
 */
export function disableScriptBrainSet(set: number): void {
	const disableScriptBrainSet_result = Citizen.invokeNative<void>('0xD17268F762AAD469', set);
	return disableScriptBrainSet_result;
}