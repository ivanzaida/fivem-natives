/**
 * STATS:PLAYSTATS_MASTER_CONTROL
 *
 * 0xA95EC1B907F29ED9

 * 
 * ------------------------------------------------------------------
 * @param {number} accessed
 * @param {number} exit
 * @param {number} missionType
 * @param {number} missionName
 */
export function playstatsMasterControl(accessed: number, exit: number, missionType: number, missionName: number): void {
	const playstatsMasterControl_result = Citizen.invokeNative<void>('0xA95EC1B907F29ED9', accessed, exit, missionType, missionName);
	return playstatsMasterControl_result;
}