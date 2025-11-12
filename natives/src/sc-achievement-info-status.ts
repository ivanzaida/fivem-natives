import { IntRef } from '@ivanzaida/structures'

/**
 * SOCIALCLUB:SC_ACHIEVEMENT_INFO_STATUS
 *
 * 0x616C54D34FFE092C

 * 
 * (status == -1) - INVALID status request to read achievements has not even started.
 * (status ==  0) - Read SUCCEEDED information is available.
 * (status ==  1) - Read is PENDING, in progress.
 * (status ==  2) - Read FAILED.
 * (status ==  3) - Read CANCELED.
 * If the Status is FAILED/CANCELED you can call SC_ACHIEVEMENT_SYNCHRONIZE once to restart everything
 * but make sure the player is online and has ROS credentials.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {IntRef} status [Ref]
 * @returns {boolean}  
 */
export function scAchievementInfoStatus(status: IntRef /* ptr */): boolean {
	const scAchievementInfoStatus_result = Citizen.invokeNative<boolean>('0x616C54D34FFE092C', status.dataView);
	return scAchievementInfoStatus_result;
}