/**
 * MONEY:NETWORK_EARN_FROM_FMBB_PHONECALL_MISSION
 *
 * 0x46A6A8998E3D8C20

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 */
export function networkEarnFromFmbbPhonecallMission(amount: number): void {
	const networkEarnFromFmbbPhonecallMission_result = Citizen.invokeNative<void>('0x46A6A8998E3D8C20', amount);
	return networkEarnFromFmbbPhonecallMission_result;
}