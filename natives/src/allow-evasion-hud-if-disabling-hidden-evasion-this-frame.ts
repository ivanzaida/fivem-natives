import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:ALLOW_EVASION_HUD_IF_DISABLING_HIDDEN_EVASION_THIS_FRAME
 *
 * 0x779023E7E53EB834

 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @param {number} timeBeforeAllowReport
 */
export function allowEvasionHudIfDisablingHiddenEvasionThisFrame(player: PlayerIndex, timeBeforeAllowReport: number = 1): void {
	const allowEvasionHudIfDisablingHiddenEvasionThisFrame_result = Citizen.invokeNative<void>('0x779023E7E53EB834', player, timeBeforeAllowReport);
	return allowEvasionHudIfDisablingHiddenEvasionThisFrame_result;
}