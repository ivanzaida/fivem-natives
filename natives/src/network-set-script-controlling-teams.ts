/**
 * NETWORK:NETWORK_SET_SCRIPT_CONTROLLING_TEAMS
 *
 * 0x2918CC9062732BC6

 * 
 * ------------------------------------------------------------------
 * @param {boolean} override
 */
export function networkSetScriptControllingTeams(override: boolean): void {
	const networkSetScriptControllingTeams_result = Citizen.invokeNative<void>('0x2918CC9062732BC6', override);
	return networkSetScriptControllingTeams_result;
}