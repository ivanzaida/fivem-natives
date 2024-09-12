/**
 * STATS:ORDER_BOSS_VEHICLE
 *
 * 0x0F285480DF661C3D

 * 
 * ------------------------------------------------------------------
 * @param {number} bossId1
 * @param {number} bossId2
 * @param {number} vehicleId
 */
export function orderBossVehicle(bossId1: number, bossId2: number, vehicleId: number): void {
	const orderBossVehicle_result = Citizen.invokeNative<void>('0x0F285480DF661C3D', bossId1, bossId2, vehicleId);
	return orderBossVehicle_result;
}