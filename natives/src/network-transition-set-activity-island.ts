import { EActivityIsland } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_TRANSITION_SET_ACTIVITY_ISLAND
 *
 * 0x4470407B9FB1A6E0

 * 
 * ------------------------------------------------------------------
 * @param {EActivityIsland} activityIsland
 */
export function networkTransitionSetActivityIsland(activityIsland: EActivityIsland | number): void {
	const networkTransitionSetActivityIsland_result = Citizen.invokeNative<void>('0x4470407B9FB1A6E0', activityIsland);
	return networkTransitionSetActivityIsland_result;
}