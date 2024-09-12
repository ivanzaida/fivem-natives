/**
 * CFX:OVERRIDE_PEDS_CAN_STAND_ON_TOP_FLAG
 *
 * 0X90A9E0B2

 * Sets whether peds can stand on top of all vehicles without falling off.Note this flag is not replicated automatically, you will have to manually do so.
 * 
 * ------------------------------------------------------------------
 * @param {boolean} flag true to override, false to use default game behavior.
 */
export function overridePedsCanStandOnTopFlag(flag: boolean): void {
	const overridePedsCanStandOnTopFlag_result = Citizen.invokeNative<void>('0X90A9E0B2', flag);
	return overridePedsCanStandOnTopFlag_result;
}