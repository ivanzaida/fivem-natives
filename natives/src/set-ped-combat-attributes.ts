import { PedIndex, ECombatAttribute } from '@ivanzaida/structures'

/**
 * PED:SET_PED_COMBAT_ATTRIBUTES
 *
 * 0xBE8796DB2B90A437

 * enum eCombatAttributes // 0x0E8E7201
 * {
 * 	BF_CanUseCover = 0,
 * 	BF_CanUseVehicles = 1,
 * 	BF_CanDoDrivebys = 2,
 * 	BF_CanLeaveVehicle = 3,
 * 	BF_CanUseDynamicStrafeDecisions = 4,
 * 	BF_AlwaysFight = 5,
 * 	BF_0x66BB9FCC = 6,
 * 	BF_0x6837DA41 = 7,
 * 	BF_0xB4A13A5A = 8,
 * 	BF_0xEE326AAD = 9,
 * 	BF_0x7DF2CCFA = 10,
 * 	BF_0x0036D422 = 11,
 * 	BF_BlindFireWhenInCover = 12,
 * 	BF_Aggressive = 13,
 * 	BF_CanInvestigate = 14,
 * 	BF_HasRadio = 15,
 * 	BF_0x6BDE28D1 = 16,
 * 	BF_AlwaysFlee = 17,
 * 	BF_0x7852797D = 18,
 * 	BF_0x33497B95 = 19,
 * 	BF_CanTauntInVehicle = 20,
 * 	BF_CanChaseTargetOnFoot = 21,
 * 	BF_WillDragInjuredPedsToSafety = 22,
 * 	BF_0xCD7168B8 = 23,
 * 	BF_UseProximityFiringRate = 24,
 * 	BF_0x48F914F8 = 25,
 * 	BF_0x2EA543D0 = 26,
 * 	BF_PerfectAccuracy = 27,
 * 	BF_CanUseFrustratedAdvance = 28,
 * 	BF_0x3D131AC1 = 29,
 * 	BF_0x3AD95F27 = 30,
 * 	BF_MaintainMinDistanceToTarget = 31,
 * 	BF_0xEAD68AD2 = 32,
 * 	BF_0xA206C2E0 = 33,
 * 	BF_CanUsePeekingVariations = 34,
 * 	BF_0xA5715184 = 35,
 * 	BF_0xD5265533 = 36,
 * 	BF_0x2B84C2BF = 37,
 * 	BF_DisableBulletReactions = 38,
 * 	BF_CanBust = 39,
 * 	BF_0xAA525726 = 40,
 * 	BF_CanCommandeerVehicles = 41,
 * 	BF_CanFlank = 42,
 * 	BF_SwitchToAdvanceIfCantFindCover = 43,
 * 	BF_SwitchToDefensiveIfInCover = 44,
 * 	BF_0xEB4786A0 = 45,
 * 	BF_CanFightArmedPedsWhenNotArmed = 46,
 * 	BF_0xA08E9402 = 47,
 * 	BF_0x952EAD7D = 48,
 * 	BF_UseEnemyAccuracyScaling = 49,
 * 	BF_CanCharge = 50,
 * 	BF_0xDA8C2BD3 = 51,
 * 	BF_0x6562F017 = 52,
 * 	BF_0xA2C3D53B = 53,
 * 	BF_AlwaysEquipBestWeapon = 54,
 * 	BF_CanSeeUnderwaterPeds = 55,
 * 	BF_0xF619486B = 56,
 * 	BF_0x61EB63A3 = 57,
 * 	BF_DisableFleeFromCombat = 58,
 * 	BF_0x8976D12B = 59,
 * 	BF_CanThrowSmokeGrenade = 60,
 * 	BF_NonMissionPedsFleeFromThisPedUnlessArmed = 61,
 * 	BF_0x5452A10C = 62,
 * 	BF_FleesFromInvincibleOpponents = 63,
 * 	BF_DisableBlockFromPursueDuringVehicleChase = 64,
 * 	BF_DisableSpinOutDuringVehicleChase = 65,
 * 	BF_DisableCruiseInFrontDuringBlockDuringVehicleChase = 66,
 * 	BF_0x0B404731 = 67,
 * 	BF_DisableReactToBuddyShot = 68,
 * 	BF_0x7FFD6AEB = 69,
 * 	BF_0x51F4AEF8 = 70,
 * 	BF_PermitChargeBeyondDefensiveArea = 71,
 * 	BF_0x63E0A8E2 = 72,
 * 	BF_0xDF974436 = 73,
 * 	BF_0x556C080B = 74,
 * 	BF_0xA4D50035 = 75,
 * 	BF_SetDisableShoutTargetPositionOnCombatStart = 76,
 * 	BF_DisableRespondedToThreatBroadcast = 77,
 * 	BF_0xCBB01765 = 78,
 * 	BF_0x4F862ED4 = 79,
 * 	BF_0xEF9C7C40 = 80,
 * 	BF_0xE51B494F = 81,
 * 	BF_0x054D0199 = 82,
 * 	BF_0xD36BCE94 = 83,
 * 	BF_0xFB11F690 = 84,
 * 	BF_0xD208A9AD = 85,
 * 	BF_AllowDogFighting = 86,
 * 	BF_0x07A6E531 = 87,
 * 	BF_0x34F9317B = 88,
 * 	BF_0x4240F5A9 = 89,
 * 	BF_0xEE129DBD = 90,
 * 	BF_0x053AEAD9 = 91
 * };
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {ECombatAttribute} combatAttribute
 * @param {boolean} activeSkill
 */
export function setPedCombatAttributes(ped: PedIndex, combatAttribute: ECombatAttribute | number, activeSkill: boolean): void {
	const setPedCombatAttributes_result = Citizen.invokeNative<void>('0xBE8796DB2B90A437', ped, combatAttribute, activeSkill);
	return setPedCombatAttributes_result;
}