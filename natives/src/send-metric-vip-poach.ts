/**
 * STATS:SEND_METRIC_VIP_POACH
 *
 * 0x329713E68B100498

 * 
 * ------------------------------------------------------------------
 * @param {number} bossId1
 * @param {number} bossId2
 * @param {boolean} isVip
 */
export function sendMetricVipPoach(bossId1: number, bossId2: number, isVip: boolean): void {
	const sendMetricVipPoach_result = Citizen.invokeNative<void>('0x329713E68B100498', bossId1, bossId2, isVip);
	return sendMetricVipPoach_result;
}