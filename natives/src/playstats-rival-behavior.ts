/**
 * STATS:PLAYSTATS_RIVAL_BEHAVIOR
 *
 * 0x0FAB208D4EE01DCE

 * 
 * Telemetry sent whenever  whenever a RIVAL player:
 * 1. Steals another CEO's Import Export car and delivers it to thier CEO's warehouse
 * 2. Steals another CEO's Import Export car and delivers it to the cops
 * 3. Steals another CEO's Import Export car and delivers it to the scrapyard
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} bossId1
 * @param {number} bossId2
 * @param {number} matchId1
 * @param {number} matchId2
 * @param {number} deliveryDestination
 * @param {number} cashEarned
 * @param {number} rpEarned
 * @param {number} vehicle
 * @param {number} vehicleStyle
 * @param {boolean} importMission
 */
export function playstatsRivalBehavior(bossId1: number, bossId2: number, matchId1: number, matchId2: number, deliveryDestination: number, cashEarned: number, rpEarned: number, vehicle: number, vehicleStyle: number, importMission: boolean): void {
	const playstatsRivalBehavior_result = Citizen.invokeNative<void>('0x0FAB208D4EE01DCE', bossId1, bossId2, matchId1, matchId2, deliveryDestination, cashEarned, rpEarned, vehicle, vehicleStyle, importMission);
	return playstatsRivalBehavior_result;
}