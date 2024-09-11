import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:GIVE_PLAYER_RAGDOLL_CONTROL
 *
 * 0xAD38642974DA79B6

 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @param {boolean} giveControl
 */
export function givePlayerRagdollControl(player: PlayerIndex, giveControl: boolean): void {
	const givePlayerRagdollControl_result = Citizen.invokeNative<void>('0xAD38642974DA79B6', player, giveControl);
	return givePlayerRagdollControl_result;
}