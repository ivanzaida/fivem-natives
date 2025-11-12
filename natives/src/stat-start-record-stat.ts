import { ERecordStat, ERecordStatPolicy } from '@ivanzaida/structures'

/**
 * STATS:STAT_START_RECORD_STAT
 *
 * 0xD007674D8A581D71

 * 
 * See enum above for the stats that are supported
 * 
 * enum StatTrackingType
 * {
 * 	LongestWheelie = 1,
 * 	LongestStoppie = 2,
 * 	NoCrashes = 3,
 * 	HighestSpeed = 4,
 * 	_MostFlips = 5,
 * 	_LongestSpin = 6,
 * 	_HighestJumpReached = 7,
 * 	LongestJump = 8,
 * 	_NearMissesNoCrash = 9,
 * 	LongestFallSurvived = 10,
 * 	LowestParachute = 11,
 * 	ReverseDriving = 12,
 * 	LongestFreefall = 13,
 * 	VehiclesStolen = 14,
 * 	_SomeCFireEventCount = 15,
 * 	_Unk16 = 16,
 * 	_LowFlyingTime = 17,
 * 	LowFlying = 18,
 * 	_InvertedFlyingTime = 19,
 * 	InvertedFlying = 20,
 * 	_PlaneSpinCount = 21,
 * 	MeleeKills = 22, // Players
 * 	_LongestSniperKill = 23,
 * 	SniperSkills = 24, // Players
 * 	DrivebyKills = 25, // Players
 * 	HeadshotKills = 26, // Players
 * 	LongestBail = 27,
 * 	_TotalRammedByCar = 28,
 * 	NearMissesPrecise = 29,
 * 	_FreefallTime = 30,
 * 	Unk31 = 31,
 * }
 * 
 * enum StatTrackingValueType
 * {
 * 	Total,
 * 	Max,
 * 	Min
 * }
 * 
 * 
 * ------------------------------------------------------------------
 * @param {ERecordStat} stat
 * @param {ERecordStatPolicy} policy
 * @returns {boolean}  
 */
export function statStartRecordStat(stat: ERecordStat | number, policy: ERecordStatPolicy | number): boolean {
	const statStartRecordStat_result = Citizen.invokeNative<boolean>('0xD007674D8A581D71', stat, policy);
	return statStartRecordStat_result;
}