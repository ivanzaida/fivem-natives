import { ModelNames } from '@ivanzaida/structures'

/**
 * PLAYER:IS_SPECIAL_ABILITY_UNLOCKED
 *
 * 0x10140D9546976B7F

 * 
 * ------------------------------------------------------------------
 * @param {ModelNames} playerModelHashKey
 * @returns {boolean}  
 */
export function isSpecialAbilityUnlocked(playerModelHashKey: ModelNames): boolean {
	const isSpecialAbilityUnlocked_result = Citizen.invokeNative<boolean>('0x10140D9546976B7F', playerModelHashKey);
	return isSpecialAbilityUnlocked_result;
}