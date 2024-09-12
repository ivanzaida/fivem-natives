/**
 * NETWORK:NETWORK_OVERRIDE_TEAM_RESTRICTIONS
 *
 * 0x2EBB17A226639CE0

 * 
 * ------------------------------------------------------------------
 * @param {number} team
 * @param {boolean} override
 */
export function networkOverrideTeamRestrictions(team: number, override: boolean): void {
	const networkOverrideTeamRestrictions_result = Citizen.invokeNative<void>('0x2EBB17A226639CE0', team, override);
	return networkOverrideTeamRestrictions_result;
}