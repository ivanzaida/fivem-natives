/**
 * MONEY:NETWORK_EARN_FROM_ISLAND_HEIST_DJ_MISSION
 *
 * 0x5836433A62D1A6C4

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {number} mission
 */
export function networkEarnFromIslandHeistDjMission(amount: number, mission: number): void {
	const networkEarnFromIslandHeistDjMission_result = Citizen.invokeNative<void>('0x5836433A62D1A6C4', amount, mission);
	return networkEarnFromIslandHeistDjMission_result;
}