import { ModelNames } from '@ivanzaida/structures'

/**
 * PLAYER:SPECIAL_ABILITY_UNLOCK
 *
 * 0xD33BCB9F50C1E588

 * 
 * ------------------------------------------------------------------
 * @param {ModelNames} playerModelHashKey
 * @param {boolean} isArcadePlayer
 */
export function specialAbilityUnlock(playerModelHashKey: ModelNames, isArcadePlayer: boolean = false): void {
	const specialAbilityUnlock_result = Citizen.invokeNative<void>('0xD33BCB9F50C1E588', playerModelHashKey, isArcadePlayer);
	return specialAbilityUnlock_result;
}