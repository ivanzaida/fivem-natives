import { IntRef } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_GET_GLOBAL_MULTIPLAYER_CLOCK
 *
 * 0x7CA15BD368B8D693

 * 
 * ------------------------------------------------------------------
 * @param {IntRef} hour [Ref]
 * @param {IntRef} minute [Ref]
 * @param {IntRef} second [Ref]
 */
export function networkGetGlobalMultiplayerClock(hour: IntRef /* ptr */, minute: IntRef /* ptr */, second: IntRef /* ptr */): void {
	const networkGetGlobalMultiplayerClock_result = Citizen.invokeNative<void>('0x7CA15BD368B8D693', hour.dataView, minute.dataView, second.dataView);
	return networkGetGlobalMultiplayerClock_result;
}