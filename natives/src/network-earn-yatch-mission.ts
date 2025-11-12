/**
 * MONEY:NETWORK_EARN_YATCH_MISSION
 *
 * 0xA6CF99057D1A4B2F

 * 
 * triggers when completing a new yacht mission
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {number} missionId
 */
export function networkEarnYatchMission(amount: number, missionId: number): void {
	const networkEarnYatchMission_result = Citizen.invokeNative<void>('0xA6CF99057D1A4B2F', amount, missionId);
	return networkEarnYatchMission_result;
}