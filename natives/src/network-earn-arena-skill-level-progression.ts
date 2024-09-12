/**
 * MONEY:NETWORK_EARN_ARENA_SKILL_LEVEL_PROGRESSION
 *
 * 0x2F7D409DB8FCD57F

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {number} level
 */
export function networkEarnArenaSkillLevelProgression(amount: number, level: number): void {
	const networkEarnArenaSkillLevelProgression_result = Citizen.invokeNative<void>('0x2F7D409DB8FCD57F', amount, level);
	return networkEarnArenaSkillLevelProgression_result;
}