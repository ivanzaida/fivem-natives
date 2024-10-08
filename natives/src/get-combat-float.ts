import { PedIndex, ECombatAttributeFloats } from '@ivanzaida/structures'

/**
 * PED:GET_COMBAT_FLOAT
 *
 * 0x34DE92FC6933B92B

 * p0: Ped Handle
 * p1: int i | 0 <= i <= 27
 * p1 probably refers to the attributes configured in combatbehavior.meta. There are 13. Example:
 * <BlindFireChance value="0.1"/>
 * <WeaponShootRateModifier value="1.0"/>
 * <TimeBetweenBurstsInCover value="1.25"/>
 * <BurstDurationInCover value="2.0"/>
 * <TimeBetweenPeeks value="10.0"/>
 * <WeaponAccuracy value="0.18"/>
 * <FightProficiency value="0.8"/>
 * <StrafeWhenMovingChance value="1.0"/>
 * <WalkWhenStrafingChance value="0.0"/>
 * <AttackWindowDistanceForCover value="55.0"/>
 * <TimeToInvalidateInjuredTarget value="9.0"/>
 * <TriggerChargeTime_Near value="4.0"/>
 * <TriggerChargeTime_Far value="10.0"/>
 * -------------Confirmed by editing combatbehavior.meta:
 * p1:
 * 0=BlindFireChance
 * 1=BurstDurationInCover
 * 3=TimeBetweenBurstsInCover
 * 4=TimeBetweenPeeks
 * 5=StrafeWhenMovingChance
 * 8=WalkWhenStrafingChance
 * 11=AttackWindowDistanceForCover
 * 12=TimeToInvalidateInjuredTarget
 * 16=OptimalCoverDistance
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {ECombatAttributeFloats} combatAttribute
 * @returns {number}  
 */
export function getCombatFloat(ped: PedIndex, combatAttribute: ECombatAttributeFloats | number): number {
	const getCombatFloat_result = Citizen.invokeNative<number>('0x34DE92FC6933B92B', ped, combatAttribute);
	return getCombatFloat_result;
}