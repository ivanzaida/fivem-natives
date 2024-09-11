import { EGoonInviteType } from '@ivanzaida/structures'

/**
 * STATS:START_BEING_GOON
 *
 * 0x221F00BDB6FE967E

 * 
 * ------------------------------------------------------------------
 * @param {number} bossId1
 * @param {number} bossId2
 * @param {EGoonInviteType} inviteMode
 */
export function startBeingGoon(bossId1: number, bossId2: number, inviteMode: EGoonInviteType | number): void {
	const startBeingGoon_result = Citizen.invokeNative<void>('0x221F00BDB6FE967E', bossId1, bossId2, inviteMode);
	return startBeingGoon_result;
}