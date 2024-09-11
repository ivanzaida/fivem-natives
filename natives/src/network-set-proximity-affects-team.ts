/**
 * NETWORK:NETWORK_SET_PROXIMITY_AFFECTS_TEAM
 *
 * 0x725A501C189FDB29

 * 
 * ------------------------------------------------------------------
 * @param {boolean} override
 */
export function networkSetProximityAffectsTeam(override: boolean): void {
	const networkSetProximityAffectsTeam_result = Citizen.invokeNative<void>('0x725A501C189FDB29', override);
	return networkSetProximityAffectsTeam_result;
}