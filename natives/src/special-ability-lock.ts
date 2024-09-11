import { ModelNames } from '@ivanzaida/structures'

/**
 * PLAYER:SPECIAL_ABILITY_LOCK
 *
 * 0xE3D5A2DE522F29C1

 * 
 * ------------------------------------------------------------------
 * @param {ModelNames} playerModelHashKey
 * @param {boolean} isArcadePlayer
 */
export function specialAbilityLock(playerModelHashKey: ModelNames, isArcadePlayer: boolean = false): void {
	const specialAbilityLock_result = Citizen.invokeNative<void>('0xE3D5A2DE522F29C1', playerModelHashKey, isArcadePlayer);
	return specialAbilityLock_result;
}