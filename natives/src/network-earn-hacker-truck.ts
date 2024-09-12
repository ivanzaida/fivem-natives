/**
 * MONEY:NETWORK_EARN_HACKER_TRUCK
 *
 * 0x771C72551EE0BD14

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {number} mission
 * @param {number} missionRival
 * @param {number} missionSolo
 */
export function networkEarnHackerTruck(amount: number, mission: number, missionRival: number, missionSolo: number): void {
	const networkEarnHackerTruck_result = Citizen.invokeNative<void>('0x771C72551EE0BD14', amount, mission, missionRival, missionSolo);
	return networkEarnHackerTruck_result;
}