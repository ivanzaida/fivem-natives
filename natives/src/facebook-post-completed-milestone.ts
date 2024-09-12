import { EMilestoneId } from '@ivanzaida/structures'

/**
 * NETWORK:FACEBOOK_POST_COMPLETED_MILESTONE
 *
 * 0xAE566521443DBC23

 * 
 * ------------------------------------------------------------------
 * @param {EMilestoneId} milestoneId
 * @returns {boolean}  
 */
export function facebookPostCompletedMilestone(milestoneId: EMilestoneId | number): boolean {
	const facebookPostCompletedMilestone_result = Citizen.invokeNative<boolean>('0xAE566521443DBC23', milestoneId);
	return facebookPostCompletedMilestone_result;
}