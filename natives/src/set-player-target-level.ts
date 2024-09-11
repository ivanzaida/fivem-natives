import { EPlayerTargetLevel } from '@ivanzaida/structures'

/**
 * PLAYER:SET_PLAYER_TARGET_LEVEL
 *
 * 0x204EF9C415A885DE

 * 
 * ------------------------------------------------------------------
 * @param {EPlayerTargetLevel} targetLevel
 */
export function setPlayerTargetLevel(targetLevel: EPlayerTargetLevel | number): void {
	const setPlayerTargetLevel_result = Citizen.invokeNative<void>('0x204EF9C415A885DE', targetLevel);
	return setPlayerTargetLevel_result;
}