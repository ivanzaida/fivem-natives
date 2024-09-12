/**
 * STATS:SEND_METRIC_PUNISH_BODYGUARD
 *
 * 0x88D5C9BF47388E35

 * 
 * ------------------------------------------------------------------
 * @param {number} value
 */
export function sendMetricPunishBodyguard(value: number): void {
	const sendMetricPunishBodyguard_result = Citizen.invokeNative<void>('0x88D5C9BF47388E35', value);
	return sendMetricPunishBodyguard_result;
}