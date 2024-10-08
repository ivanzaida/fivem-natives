import { PedIndex, EPedConfigFlags } from '@ivanzaida/structures'

/**
 * PED:SET_PED_CONFIG_FLAG
 *
 * 0x0428AFDCAA63B06E

 * enum ePedConfigFlags
 * {
 * 	_CPED_CONFIG_FLAG_0xC63DE95E = 1,
 * 	CPED_CONFIG_FLAG_NoCriticalHits = 2,
 * 	CPED_CONFIG_FLAG_DrownsInWater = 3,
 * 	CPED_CONFIG_FLAG_DisableReticuleFixedLockon = 4,
 * 	_CPED_CONFIG_FLAG_0x37D196F4 = 5,
 * 	_CPED_CONFIG_FLAG_0xE2462399 = 6,
 * 	CPED_CONFIG_FLAG_UpperBodyDamageAnimsOnly = 7,
 * 	_CPED_CONFIG_FLAG_0xEDDEB838 = 8,
 * 	_CPED_CONFIG_FLAG_0xB398B6FD = 9,
 * 	_CPED_CONFIG_FLAG_0xF6664E68 = 10,
 * 	_CPED_CONFIG_FLAG_0xA05E7CA3 = 11,
 * 	_CPED_CONFIG_FLAG_0xCE394045 = 12,
 * 	CPED_CONFIG_FLAG_NeverLeavesGroup = 13,
 * 	_CPED_CONFIG_FLAG_0xCD8D1411 = 14,
 * 	_CPED_CONFIG_FLAG_0xB031F1A9 = 15,
 * 	_CPED_CONFIG_FLAG_0xFE65BEE3 = 16,
 * 	CPED_CONFIG_FLAG_BlockNonTemporaryEvents = 17,
 * 	_CPED_CONFIG_FLAG_0x380165BD = 18,
 * 	_CPED_CONFIG_FLAG_0x07C045C7 = 19,
 * 	_CPED_CONFIG_FLAG_0x583B5E2D = 20,
 * 	_CPED_CONFIG_FLAG_0x475EDA58 = 21,
 * 	_CPED_CONFIG_FLAG_0x8629D05B = 22,
 * 	_CPED_CONFIG_FLAG_0x1522968B = 23,
 * 	CPED_CONFIG_FLAG_IgnoreSeenMelee = 24,
 * 	_CPED_CONFIG_FLAG_0x4CC09C4B = 25,
 * 	_CPED_CONFIG_FLAG_0x034F3053 = 26,
 * 	_CPED_CONFIG_FLAG_0xD91BA7CC = 27,
 * 	_CPED_CONFIG_FLAG_0x5C8DC66E = 28,
 * 	CPED_CONFIG_FLAG_GetOutUndriveableVehicle = 29,
 * 	_CPED_CONFIG_FLAG_0x6580B9D2 = 30,
 * 	_CPED_CONFIG_FLAG_0x0EF7A297 = 31,
 * 	CPED_CONFIG_FLAG_WillFlyThruWindscreen = 32,
 * 	CPED_CONFIG_FLAG_DieWhenRagdoll = 33,
 * 	CPED_CONFIG_FLAG_HasHelmet = 34,
 * 	CPED_CONFIG_FLAG_UseHelmet = 35,
 * 	CPED_CONFIG_FLAG_DontTakeOffHelmet = 36,
 * 	_CPED_CONFIG_FLAG_0xB130D17B = 37,
 * 	_CPED_CONFIG_FLAG_0x5F071200 = 38,
 * 	CPED_CONFIG_FLAG_DisableEvasiveDives = 39,
 * 	_CPED_CONFIG_FLAG_0xC287AAFF = 40,
 * 	_CPED_CONFIG_FLAG_0x203328CC = 41,
 * 	CPED_CONFIG_FLAG_DontInfluenceWantedLevel = 42,
 * 	CPED_CONFIG_FLAG_DisablePlayerLockon = 43,
 * 	CPED_CONFIG_FLAG_DisableLockonToRandomPeds = 44,
 * 	CPED_CONFIG_FLAG_AllowLockonToFriendlyPlayers = 45,
 * 	_CPED_CONFIG_FLAG_0xDB115BFA = 46,
 * 	CPED_CONFIG_FLAG_PedBeingDeleted = 47,
 * 	CPED_CONFIG_FLAG_BlockWeaponSwitching = 48,
 * 	_CPED_CONFIG_FLAG_0xF8E99565 = 49,
 * 	_CPED_CONFIG_FLAG_0xDD17FEE6 = 50,
 * 	_CPED_CONFIG_FLAG_0x7ED9B2C9 = 51,
 * 	_CPED_CONFIG_FLAG_NoCollison = 52,
 * 	_CPED_CONFIG_FLAG_0x5A6C1F6E = 53,
 * 	_CPED_CONFIG_FLAG_0xD749FC41 = 54,
 * 	_CPED_CONFIG_FLAG_0x357F63F3 = 55,
 * 	_CPED_CONFIG_FLAG_0xC5E60961 = 56,
 * 	_CPED_CONFIG_FLAG_0x29275C3E = 57,
 * 	CPED_CONFIG_FLAG_IsFiring = 58,
 * 	CPED_CONFIG_FLAG_WasFiring = 59,
 * 	CPED_CONFIG_FLAG_IsStanding = 60,
 * 	CPED_CONFIG_FLAG_WasStanding = 61,
 * 	CPED_CONFIG_FLAG_InVehicle = 62,
 * 	CPED_CONFIG_FLAG_OnMount = 63,
 * 	CPED_CONFIG_FLAG_AttachedToVehicle = 64,
 * 	CPED_CONFIG_FLAG_IsSwimming = 65,
 * 	CPED_CONFIG_FLAG_WasSwimming = 66,
 * 	CPED_CONFIG_FLAG_IsSkiing = 67,
 * 	CPED_CONFIG_FLAG_IsSitting = 68,
 * 	CPED_CONFIG_FLAG_KilledByStealth = 69,
 * 	CPED_CONFIG_FLAG_KilledByTakedown = 70,
 * 	CPED_CONFIG_FLAG_Knockedout = 71,
 * 	_CPED_CONFIG_FLAG_0x3E3C4560 = 72,
 * 	_CPED_CONFIG_FLAG_0x2994C7B7 = 73,
 * 	_CPED_CONFIG_FLAG_0x6D59D275 = 74,
 * 	CPED_CONFIG_FLAG_UsingCoverPoint = 75,
 * 	CPED_CONFIG_FLAG_IsInTheAir = 76,
 * 	_CPED_CONFIG_FLAG_0x2D493FB7 = 77,
 * 	CPED_CONFIG_FLAG_IsAimingGun = 78,
 * 	_CPED_CONFIG_FLAG_0x14D69875 = 79,
 * 	_CPED_CONFIG_FLAG_0x40B05311 = 80,
 * 	_CPED_CONFIG_FLAG_0x8B230BC5 = 81,
 * 	_CPED_CONFIG_FLAG_0xC74E5842 = 82,
 * 	_CPED_CONFIG_FLAG_0x9EA86147 = 83,
 * 	_CPED_CONFIG_FLAG_0x674C746C = 84,
 * 	_CPED_CONFIG_FLAG_0x3E56A8C2 = 85,
 * 	_CPED_CONFIG_FLAG_0xC144A1EF = 86,
 * 	_CPED_CONFIG_FLAG_0x0548512D = 87,
 * 	_CPED_CONFIG_FLAG_0x31C93909 = 88,
 * 	_CPED_CONFIG_FLAG_0xA0269315 = 89,
 * 	_CPED_CONFIG_FLAG_0xD4D59D4D = 90,
 * 	_CPED_CONFIG_FLAG_0x411D4420 = 91,
 * 	_CPED_CONFIG_FLAG_0xDF4AEF0D = 92,
 * 	CPED_CONFIG_FLAG_ForcePedLoadCover = 93,
 * 	_CPED_CONFIG_FLAG_0x300E4CD3 = 94,
 * 	_CPED_CONFIG_FLAG_0xF1C5BF04 = 95,
 * 	_CPED_CONFIG_FLAG_0x89C2EF13 = 96,
 * 	CPED_CONFIG_FLAG_VaultFromCover = 97,
 * 	_CPED_CONFIG_FLAG_0x02A852C8 = 98,
 * 	_CPED_CONFIG_FLAG_0x3D9407F1 = 99,
 * 	_CPED_CONFIG_FLAG_IsDrunk = 100, // 0x319B4558
 * 	CPED_CONFIG_FLAG_ForcedAim = 101,
 * 	_CPED_CONFIG_FLAG_0xB942D71A = 102,
 * 	_CPED_CONFIG_FLAG_0xD26C55A8 = 103,
 * 	CPED_CONFIG_FLAG_OpenDoorArmIK = 104,
 * 	CPED_CONFIG_FLAG_ForceReload = 105,
 * 	CPED_CONFIG_FLAG_DontActivateRagdollFromVehicleImpact = 106,
 * 	CPED_CONFIG_FLAG_DontActivateRagdollFromBulletImpact = 107,
 * 	CPED_CONFIG_FLAG_DontActivateRagdollFromExplosions = 108,
 * 	CPED_CONFIG_FLAG_DontActivateRagdollFromFire = 109,
 * 	CPED_CONFIG_FLAG_DontActivateRagdollFromElectrocution = 110,
 * 	_CPED_CONFIG_FLAG_0x83C0A4BF = 111,
 * 	_CPED_CONFIG_FLAG_0x0E0FAF8C = 112,
 * 	CPED_CONFIG_FLAG_KeepWeaponHolsteredUnlessFired = 113,
 * 	_CPED_CONFIG_FLAG_0x43B80B79 = 114,
 * 	_CPED_CONFIG_FLAG_0x0D2A9309 = 115,
 * 	CPED_CONFIG_FLAG_GetOutBurningVehicle = 116,
 * 	CPED_CONFIG_FLAG_BumpedByPlayer = 117,
 * 	CPED_CONFIG_FLAG_RunFromFiresAndExplosions = 118,
 * 	CPED_CONFIG_FLAG_TreatAsPlayerDuringTargeting = 119,
 * 	CPED_CONFIG_FLAG_IsHandCuffed = 120,
 * 	CPED_CONFIG_FLAG_IsAnkleCuffed = 121,
 * 	CPED_CONFIG_FLAG_DisableMelee = 122,
 * 	CPED_CONFIG_FLAG_DisableUnarmedDrivebys = 123,
 * 	CPED_CONFIG_FLAG_JustGetsPulledOutWhenElectrocuted = 124,
 * 	_CPED_CONFIG_FLAG_0x5FED6BFD = 125,
 * 	CPED_CONFIG_FLAG_WillNotHotwireLawEnforcementVehicle = 126,
 * 	CPED_CONFIG_FLAG_WillCommandeerRatherThanJack = 127,
 * 	CPED_CONFIG_FLAG_CanBeAgitated = 128,
 * 	CPED_CONFIG_FLAG_ForcePedToFaceLeftInCover = 129,
 * 	CPED_CONFIG_FLAG_ForcePedToFaceRightInCover = 130,
 * 	CPED_CONFIG_FLAG_BlockPedFromTurningInCover = 131,
 * 	CPED_CONFIG_FLAG_KeepRelationshipGroupAfterCleanUp = 132,
 * 	CPED_CONFIG_FLAG_ForcePedToBeDragged = 133,
 * 	CPED_CONFIG_FLAG_PreventPedFromReactingToBeingJacked = 134,
 * 	CPED_CONFIG_FLAG_IsScuba = 135,
 * 	CPED_CONFIG_FLAG_WillArrestRatherThanJack = 136,
 * 	CPED_CONFIG_FLAG_RemoveDeadExtraFarAway = 137,
 * 	CPED_CONFIG_FLAG_RidingTrain = 138,
 * 	CPED_CONFIG_FLAG_ArrestResult = 139,
 * 	CPED_CONFIG_FLAG_CanAttackFriendly = 140,
 * 	CPED_CONFIG_FLAG_WillJackAnyPlayer = 141,
 * 	_CPED_CONFIG_FLAG_0x6901E731 = 142,
 * 	_CPED_CONFIG_FLAG_0x9EC9BF6C = 143,
 * 	CPED_CONFIG_FLAG_WillJackWantedPlayersRatherThanStealCar = 144,
 * 	CPED_CONFIG_FLAG_ShootingAnimFlag = 145,
 * 	CPED_CONFIG_FLAG_DisableLadderClimbing = 146,
 * 	CPED_CONFIG_FLAG_StairsDetected = 147,
 * 	CPED_CONFIG_FLAG_SlopeDetected = 148,
 * 	_CPED_CONFIG_FLAG_0x1A15670B = 149,
 * 	CPED_CONFIG_FLAG_CowerInsteadOfFlee = 150,
 * 	CPED_CONFIG_FLAG_CanActivateRagdollWhenVehicleUpsideDown = 151,
 * 	CPED_CONFIG_FLAG_AlwaysRespondToCriesForHelp = 152,
 * 	CPED_CONFIG_FLAG_DisableBloodPoolCreation = 153,
 * 	CPED_CONFIG_FLAG_ShouldFixIfNoCollision = 154,
 * 	CPED_CONFIG_FLAG_CanPerformArrest = 155,
 * 	CPED_CONFIG_FLAG_CanPerformUncuff = 156,
 * 	CPED_CONFIG_FLAG_CanBeArrested = 157,
 * 	_CPED_CONFIG_FLAG_0xF7960FF5 = 158,
 * 	CPED_CONFIG_FLAG_PlayerPreferFrontSeatMP = 159,
 * 	_CPED_CONFIG_FLAG_0x0C6C3099 = 160,
 * 	_CPED_CONFIG_FLAG_0x645F927A = 161,
 * 	_CPED_CONFIG_FLAG_0xA86549B9 = 162,
 * 	_CPED_CONFIG_FLAG_0x8AAF337A = 163,
 * 	_CPED_CONFIG_FLAG_0x13BAA6E7 = 164,
 * 	_CPED_CONFIG_FLAG_0x5FB9D1F5 = 165,
 * 	CPED_CONFIG_FLAG_IsInjured = 166,
 * 	CPED_CONFIG_FLAG_DontEnterVehiclesInPlayersGroup = 167,
 * 	_CPED_CONFIG_FLAG_0xD8072639 = 168,
 * 	CPED_CONFIG_FLAG_PreventAllMeleeTaunts = 169,
 * 	CPED_CONFIG_FLAG_ForceDirectEntry = 170,
 * 	CPED_CONFIG_FLAG_AlwaysSeeApproachingVehicles = 171,
 * 	CPED_CONFIG_FLAG_CanDiveAwayFromApproachingVehicles = 172,
 * 	CPED_CONFIG_FLAG_AllowPlayerToInterruptVehicleEntryExit = 173,
 * 	CPED_CONFIG_FLAG_OnlyAttackLawIfPlayerIsWanted = 174,
 * 	_CPED_CONFIG_FLAG_0x90008BFA = 175,
 * 	_CPED_CONFIG_FLAG_0x07C7A910 = 176,
 * 	CPED_CONFIG_FLAG_PedsJackingMeDontGetIn = 177,
 * 	_CPED_CONFIG_FLAG_0xCE4E8BE2 = 178,
 * 	CPED_CONFIG_FLAG_PedIgnoresAnimInterruptEvents = 179,
 * 	CPED_CONFIG_FLAG_IsInCustody = 180,
 * 	CPED_CONFIG_FLAG_ForceStandardBumpReactionThresholds = 181,
 * 	CPED_CONFIG_FLAG_LawWillOnlyAttackIfPlayerIsWanted = 182,
 * 	CPED_CONFIG_FLAG_IsAgitated = 183,
 * 	CPED_CONFIG_FLAG_PreventAutoShuffleToDriversSeat = 184,
 * 	CPED_CONFIG_FLAG_UseKinematicModeWhenStationary = 185,
 * 	CPED_CONFIG_FLAG_EnableWeaponBlocking = 186,
 * 	CPED_CONFIG_FLAG_HasHurtStarted = 187,
 * 	CPED_CONFIG_FLAG_DisableHurt = 188,
 * 	CPED_CONFIG_FLAG_PlayerIsWeird = 189,
 * 	_CPED_CONFIG_FLAG_0x32FC208B = 190,
 * 	_CPED_CONFIG_FLAG_0x0C296E5A = 191,
 * 	_CPED_CONFIG_FLAG_0xE63B73EC = 192,
 * 	CPED_CONFIG_FLAG_DoNothingWhenOnFootByDefault = 193,
 * 	CPED_CONFIG_FLAG_UsingScenario = 194,
 * 	CPED_CONFIG_FLAG_VisibleOnScreen = 195,
 * 	_CPED_CONFIG_FLAG_0xD88C58A1 = 196,
 * 	_CPED_CONFIG_FLAG_0x5A3DCF43 = 197,
 * 	_CPED_CONFIG_FLAG_0xEA02B420 = 198,
 * 	CPED_CONFIG_FLAG_DontActivateRagdollOnVehicleCollisionWhenDead = 199,
 * 	CPED_CONFIG_FLAG_HasBeenInArmedCombat = 200,
 * 	_CPED_CONFIG_FLAG_0x5E6466F6 = 201,
 * 	CPED_CONFIG_FLAG_Avoidance_Ignore_All = 202,
 * 	CPED_CONFIG_FLAG_Avoidance_Ignored_by_All = 203,
 * 	CPED_CONFIG_FLAG_Avoidance_Ignore_Group1 = 204,
 * 	CPED_CONFIG_FLAG_Avoidance_Member_of_Group1 = 205,
 * 	CPED_CONFIG_FLAG_ForcedToUseSpecificGroupSeatIndex = 206,
 * 	_CPED_CONFIG_FLAG_0x415B26B9 = 207,
 * 	CPED_CONFIG_FLAG_DisableExplosionReactions = 208,
 * 	CPED_CONFIG_FLAG_DodgedPlayer = 209,
 * 	CPED_CONFIG_FLAG_WaitingForPlayerControlInterrupt = 210,
 * 	CPED_CONFIG_FLAG_ForcedToStayInCover = 211,
 * 	CPED_CONFIG_FLAG_GeneratesSoundEvents = 212,
 * 	CPED_CONFIG_FLAG_ListensToSoundEvents = 213,
 * 	CPED_CONFIG_FLAG_AllowToBeTargetedInAVehicle = 214,
 * 	CPED_CONFIG_FLAG_WaitForDirectEntryPointToBeFreeWhenExiting = 215,
 * 	CPED_CONFIG_FLAG_OnlyRequireOnePressToExitVehicle = 216,
 * 	CPED_CONFIG_FLAG_ForceExitToSkyDive = 217,
 * 	_CPED_CONFIG_FLAG_0x3C7DF9DF = 218,
 * 	_CPED_CONFIG_FLAG_0x848FFEF2 = 219,
 * 	CPED_CONFIG_FLAG_DontEnterLeadersVehicle = 220,
 * 	CPED_CONFIG_FLAG_DisableExitToSkyDive = 221,
 * 	_CPED_CONFIG_FLAG_0x84F722FA = 222,
 * 	_CPED_CONFIG_FLAG_Shrink = 223, // 0xD1B87B1F
 * 	_CPED_CONFIG_FLAG_0x728AA918 = 224,
 * 	CPED_CONFIG_FLAG_DisablePotentialToBeWalkedIntoResponse = 225,
 * 	CPED_CONFIG_FLAG_DisablePedAvoidance = 226,
 * 	CPED_CONFIG_FLAG_ForceRagdollUponDeath = 227,
 * 	_CPED_CONFIG_FLAG_0x1EA7225F = 228,
 * 	CPED_CONFIG_FLAG_DisablePanicInVehicle = 229,
 * 	CPED_CONFIG_FLAG_AllowedToDetachTrailer = 230,
 * 	_CPED_CONFIG_FLAG_0xFC3E572D = 231,
 * 	_CPED_CONFIG_FLAG_0x08E9F9CF = 232,
 * 	_CPED_CONFIG_FLAG_0x2D3BA52D = 233,
 * 	_CPED_CONFIG_FLAG_0xFD2F53EA = 234,
 * 	_CPED_CONFIG_FLAG_0x31A1B03B = 235,
 * 	CPED_CONFIG_FLAG_IsHoldingProp = 236,
 * 	CPED_CONFIG_FLAG_BlocksPathingWhenDead = 237,
 * 	_CPED_CONFIG_FLAG_0xCE57C9A3 = 238,
 * 	_CPED_CONFIG_FLAG_0x26149198 = 239,
 * 	CPED_CONFIG_FLAG_ForceSkinCharacterCloth = 240,
 * 	CPED_CONFIG_FLAG_LeaveEngineOnWhenExitingVehicles = 241,
 * 	CPED_CONFIG_FLAG_PhoneDisableTextingAnimations = 242,
 * 	CPED_CONFIG_FLAG_PhoneDisableTalkingAnimations = 243,
 * 	CPED_CONFIG_FLAG_PhoneDisableCameraAnimations = 244,
 * 	CPED_CONFIG_FLAG_DisableBlindFiringInShotReactions = 245,
 * 	CPED_CONFIG_FLAG_AllowNearbyCoverUsage = 246,
 * 	_CPED_CONFIG_FLAG_0x0C754ACA = 247,
 * 	CPED_CONFIG_FLAG_CanPlayInCarIdles = 248,
 * 	CPED_CONFIG_FLAG_CanAttackNonWantedPlayerAsLaw = 249,
 * 	CPED_CONFIG_FLAG_WillTakeDamageWhenVehicleCrashes = 250,
 * 	CPED_CONFIG_FLAG_AICanDrivePlayerAsRearPassenger = 251,
 * 	CPED_CONFIG_FLAG_PlayerCanJackFriendlyPlayers = 252,
 * 	CPED_CONFIG_FLAG_OnStairs = 253,
 * 	_CPED_CONFIG_FLAG_0xE1A2F73F = 254,
 * 	CPED_CONFIG_FLAG_AIDriverAllowFriendlyPassengerSeatEntry = 255,
 * 	_CPED_CONFIG_FLAG_0xF1EB20A9 = 256,
 * 	CPED_CONFIG_FLAG_AllowMissionPedToUseInjuredMovement = 257,
 * 	_CPED_CONFIG_FLAG_0x329DCF1A = 258,
 * 	_CPED_CONFIG_FLAG_0x8D90DD1B = 259,
 * 	_CPED_CONFIG_FLAG_0xB8A292B7 = 260,
 * 	CPED_CONFIG_FLAG_PreventUsingLowerPrioritySeats = 261,
 * 	_CPED_CONFIG_FLAG_0x2AF558F0 = 262,
 * 	_CPED_CONFIG_FLAG_0x82251455 = 263,
 * 	_CPED_CONFIG_FLAG_0x30CF498B = 264,
 * 	_CPED_CONFIG_FLAG_0xE1CD50AF = 265,
 * 	_CPED_CONFIG_FLAG_0x72E4AE48 = 266,
 * 	_CPED_CONFIG_FLAG_0xC2657EA1 = 267,
 * 	CPED_CONFIG_FLAG_TeleportToLeaderVehicle = 268,
 * 	CPED_CONFIG_FLAG_Avoidance_Ignore_WeirdPedBuffer = 269,
 * 	CPED_CONFIG_FLAG_OnStairSlope = 270,
 * 	_CPED_CONFIG_FLAG_0xA0897933 = 271,
 * 	CPED_CONFIG_FLAG_DontBlipCop = 272,
 * 	CPED_CONFIG_FLAG_ClimbedShiftedFence = 273,
 * 	_CPED_CONFIG_FLAG_0xF7823618 = 274,
 * 	CPED_CONFIG_FLAG_KillWhenTrapped = 275,
 * 	CPED_CONFIG_FLAG_EdgeDetected = 276,
 * 	_CPED_CONFIG_FLAG_0x92B67896 = 277,
 * 	_CPED_CONFIG_FLAG_0xCAD677C9 = 278,
 * 	CPED_CONFIG_FLAG_AvoidTearGas = 279,
 * 	_CPED_CONFIG_FLAG_0x5276AC7B = 280,
 * 	CPED_CONFIG_FLAG_DisableGoToWritheWhenInjured = 281,
 * 	CPED_CONFIG_FLAG_OnlyUseForcedSeatWhenEnteringHeliInGroup = 282,
 * 	_CPED_CONFIG_FLAG_0x9139724D = 283,
 * 	_CPED_CONFIG_FLAG_0xA1457461 = 284,
 * 	CPED_CONFIG_FLAG_DisableWeirdPedEvents = 285,
 * 	CPED_CONFIG_FLAG_ShouldChargeNow = 286,
 * 	CPED_CONFIG_FLAG_RagdollingOnBoat = 287,
 * 	CPED_CONFIG_FLAG_HasBrandishedWeapon = 288,
 * 	_CPED_CONFIG_FLAG_0x1B9EE8A1 = 289,
 * 	_CPED_CONFIG_FLAG_0xF3F5758C = 290,
 * 	_CPED_CONFIG_FLAG_0x2A9307F1 = 291,
 * 	_CPED_CONFIG_FLAG_FreezePosition = 292, // 0x7403D216
 * 	_CPED_CONFIG_FLAG_0xA06A3C6C = 293,
 * 	CPED_CONFIG_FLAG_DisableShockingEvents = 294,
 * 	_CPED_CONFIG_FLAG_0xF8DA25A5 = 295,
 * 	CPED_CONFIG_FLAG_NeverReactToPedOnRoof = 296,
 * 	_CPED_CONFIG_FLAG_0xB31F1187 = 297,
 * 	_CPED_CONFIG_FLAG_0x84315402 = 298,
 * 	CPED_CONFIG_FLAG_DisableShockingDrivingOnPavementEvents = 299,
 * 	_CPED_CONFIG_FLAG_0xC7829B67 = 300,
 * 	CPED_CONFIG_FLAG_DisablePedConstraints = 301,
 * 	CPED_CONFIG_FLAG_ForceInitialPeekInCover = 302,
 * 	_CPED_CONFIG_FLAG_0x2ADA871B = 303,
 * 	_CPED_CONFIG_FLAG_0x47BC8A58 = 304,
 * 	CPED_CONFIG_FLAG_DisableJumpingFromVehiclesAfterLeader = 305,
 * 	_CPED_CONFIG_FLAG_0x4A133C50 = 306,
 * 	_CPED_CONFIG_FLAG_0xC58099C3 = 307,
 * 	_CPED_CONFIG_FLAG_0xF3D76D41 = 308,
 * 	_CPED_CONFIG_FLAG_0xB0EEE9F2 = 309,
 * 	CPED_CONFIG_FLAG_IsInCluster = 310,
 * 	CPED_CONFIG_FLAG_ShoutToGroupOnPlayerMelee = 311,
 * 	CPED_CONFIG_FLAG_IgnoredByAutoOpenDoors = 312,
 * 	_CPED_CONFIG_FLAG_0xD4136C22 = 313,
 * 	CPED_CONFIG_FLAG_ForceIgnoreMeleeActiveCombatant = 314,
 * 	CPED_CONFIG_FLAG_CheckLoSForSoundEvents = 315,
 * 	_CPED_CONFIG_FLAG_0xD5C98277 = 316,
 * 	CPED_CONFIG_FLAG_CanSayFollowedByPlayerAudio = 317,
 * 	CPED_CONFIG_FLAG_ActivateRagdollFromMinorPlayerContact = 318,
 * 	_CPED_CONFIG_FLAG_0xD8BE1D54 = 319,
 * 	CPED_CONFIG_FLAG_ForcePoseCharacterCloth = 320,
 * 	CPED_CONFIG_FLAG_HasClothCollisionBounds = 321,
 * 	CPED_CONFIG_FLAG_HasHighHeels = 322,
 * 	_CPED_CONFIG_FLAG_0x86B01E54 = 323,
 * 	CPED_CONFIG_FLAG_DontBehaveLikeLaw = 324,
 * 	_CPED_CONFIG_FLAG_0xC03B736C = 325, // SpawnedAtScenario?
 * 	CPED_CONFIG_FLAG_DisablePoliceInvestigatingBody = 326,
 * 	CPED_CONFIG_FLAG_DisableWritheShootFromGround = 327,
 * 	CPED_CONFIG_FLAG_LowerPriorityOfWarpSeats = 328,
 * 	CPED_CONFIG_FLAG_DisableTalkTo = 329,
 * 	CPED_CONFIG_FLAG_DontBlip = 330,
 * 	CPED_CONFIG_FLAG_IsSwitchingWeapon = 331,
 * 	CPED_CONFIG_FLAG_IgnoreLegIkRestrictions = 332,
 * 	_CPED_CONFIG_FLAG_0x150468FD = 333,
 * 	_CPED_CONFIG_FLAG_0x914EBD6B = 334,
 * 	_CPED_CONFIG_FLAG_0x79AF3B6D = 335,
 * 	_CPED_CONFIG_FLAG_0x75C7A632 = 336,
 * 	_CPED_CONFIG_FLAG_0x52D530E2 = 337,
 * 	_CPED_CONFIG_FLAG_0xDB2A90E0 = 338,
 * 	CPED_CONFIG_FLAG_AllowTaskDoNothingTimeslicing = 339,
 * 	_CPED_CONFIG_FLAG_0x12ADB567 = 340,
 * 	_CPED_CONFIG_FLAG_0x105C8518 = 341,
 * 	CPED_CONFIG_FLAG_NotAllowedToJackAnyPlayers = 342,
 * 	_CPED_CONFIG_FLAG_0xED152C3E = 343,
 * 	_CPED_CONFIG_FLAG_0xA0EFE6A8 = 344,
 * 	CPED_CONFIG_FLAG_AlwaysLeaveTrainUponArrival = 345,
 * 	_CPED_CONFIG_FLAG_0xCDDFE830 = 346,
 * 	CPED_CONFIG_FLAG_OnlyWritheFromWeaponDamage = 347,
 * 	CPED_CONFIG_FLAG_UseSloMoBloodVfx = 348,
 * 	CPED_CONFIG_FLAG_EquipJetpack = 349,
 * 	CPED_CONFIG_FLAG_PreventDraggedOutOfCarThreatResponse = 350,
 * 	_CPED_CONFIG_FLAG_0xE13D1F7C = 351,
 * 	_CPED_CONFIG_FLAG_0x40E25FB9 = 352,
 * 	_CPED_CONFIG_FLAG_0x930629D9 = 353,
 * 	_CPED_CONFIG_FLAG_0xECCF0C7F = 354,
 * 	_CPED_CONFIG_FLAG_0xB6E9613B = 355,
 * 	CPED_CONFIG_FLAG_ForceDeepSurfaceCheck = 356,
 * 	CPED_CONFIG_FLAG_DisableDeepSurfaceAnims = 357,
 * 	CPED_CONFIG_FLAG_DontBlipNotSynced = 358,
 * 	CPED_CONFIG_FLAG_IsDuckingInVehicle = 359,
 * 	CPED_CONFIG_FLAG_PreventAutoShuffleToTurretSeat = 360,
 * 	CPED_CONFIG_FLAG_DisableEventInteriorStatusCheck = 361,
 * 	CPED_CONFIG_FLAG_HasReserveParachute = 362,
 * 	CPED_CONFIG_FLAG_UseReserveParachute = 363,
 * 	CPED_CONFIG_FLAG_TreatDislikeAsHateWhenInCombat = 364,
 * 	CPED_CONFIG_FLAG_OnlyUpdateTargetWantedIfSeen = 365,
 * 	CPED_CONFIG_FLAG_AllowAutoShuffleToDriversSeat = 366,
 * 	_CPED_CONFIG_FLAG_0xD7E07D37 = 367,
 * 	_CPED_CONFIG_FLAG_0x03C4FD24 = 368,
 * 	_CPED_CONFIG_FLAG_0x7675789A = 369,
 * 	_CPED_CONFIG_FLAG_0xB7288A88 = 370,
 * 	_CPED_CONFIG_FLAG_0xC06B6291 = 371,
 * 	CPED_CONFIG_FLAG_PreventReactingToSilencedCloneBullets = 372,
 * 	CPED_CONFIG_FLAG_DisableInjuredCryForHelpEvents = 373,
 * 	CPED_CONFIG_FLAG_NeverLeaveTrain = 374,
 * 	CPED_CONFIG_FLAG_DontDropJetpackOnDeath = 375,
 * 	_CPED_CONFIG_FLAG_0x147F1FFB = 376,
 * 	_CPED_CONFIG_FLAG_0x4376DD79 = 377,
 * 	_CPED_CONFIG_FLAG_0xCD3DB518 = 378,
 * 	_CPED_CONFIG_FLAG_0xFE4BA4B6 = 379,
 * 	CPED_CONFIG_FLAG_DisableAutoEquipHelmetsInBikes = 380,
 * 	_CPED_CONFIG_FLAG_0xBCD816CD = 381,
 * 	_CPED_CONFIG_FLAG_0xCF02DD69 = 382,
 * 	_CPED_CONFIG_FLAG_0xF73AFA2E = 383,
 * 	_CPED_CONFIG_FLAG_0x80B9A9D0 = 384,
 * 	_CPED_CONFIG_FLAG_0xF601F7EE = 385,
 * 	_CPED_CONFIG_FLAG_0xA91350FC = 386,
 * 	_CPED_CONFIG_FLAG_0x3AB23B96 = 387,
 * 	CPED_CONFIG_FLAG_IsClimbingLadder = 388,
 * 	CPED_CONFIG_FLAG_HasBareFeet = 389,
 * 	CPED_CONFIG_FLAG_UNUSED_REPLACE_ME_2 = 390,
 * 	CPED_CONFIG_FLAG_GoOnWithoutVehicleIfItIsUnableToGetBackToRoad = 391,
 * 	CPED_CONFIG_FLAG_BlockDroppingHealthSnacksOnDeath = 392,
 * 	_CPED_CONFIG_FLAG_0xC11D3E8F = 393,
 * 	CPED_CONFIG_FLAG_ForceThreatResponseToNonFriendToFriendMeleeActions = 394,
 * 	CPED_CONFIG_FLAG_DontRespondToRandomPedsDamage = 395,
 * 	CPED_CONFIG_FLAG_AllowContinuousThreatResponseWantedLevelUpdates = 396,
 * 	CPED_CONFIG_FLAG_KeepTargetLossResponseOnCleanup = 397,
 * 	CPED_CONFIG_FLAG_PlayersDontDragMeOutOfCar = 398,
 * 	CPED_CONFIG_FLAG_BroadcastRepondedToThreatWhenGoingToPointShooting = 399,
 * 	CPED_CONFIG_FLAG_IgnorePedTypeForIsFriendlyWith = 400,
 * 	CPED_CONFIG_FLAG_TreatNonFriendlyAsHateWhenInCombat = 401,
 * 	CPED_CONFIG_FLAG_DontLeaveVehicleIfLeaderNotInVehicle = 402,
 * 	_CPED_CONFIG_FLAG_0x5E5B9591 = 403,
 * 	CPED_CONFIG_FLAG_AllowMeleeReactionIfMeleeProofIsOn = 404,
 * 	_CPED_CONFIG_FLAG_0x77840177 = 405,
 * 	_CPED_CONFIG_FLAG_0x1C7ACAC4 = 406,
 * 	CPED_CONFIG_FLAG_UseNormalExplosionDamageWhenBlownUpInVehicle = 407,
 * 	CPED_CONFIG_FLAG_DisableHomingMissileLockForVehiclePedInside = 408,
 * 	CPED_CONFIG_FLAG_DisableTakeOffScubaGear = 409,
 * 	CPED_CONFIG_FLAG_IgnoreMeleeFistWeaponDamageMult = 410,
 * 	CPED_CONFIG_FLAG_LawPedsCanFleeFromNonWantedPlayer = 411,
 * 	CPED_CONFIG_FLAG_ForceBlipSecurityPedsIfPlayerIsWanted = 412,
 * 	CPED_CONFIG_FLAG_IsHolsteringWeapon = 413,
 * 	CPED_CONFIG_FLAG_UseGoToPointForScenarioNavigation = 414,
 * 	CPED_CONFIG_FLAG_DontClearLocalPassengersWantedLevel = 415,
 * 	CPED_CONFIG_FLAG_BlockAutoSwapOnWeaponPickups = 416,
 * 	CPED_CONFIG_FLAG_ThisPedIsATargetPriorityForAI = 417,
 * 	CPED_CONFIG_FLAG_IsSwitchingHelmetVisor = 418,
 * 	CPED_CONFIG_FLAG_ForceHelmetVisorSwitch = 419,
 * 	_CPED_CONFIG_FLAG_0xCFF5F6DE = 420,
 * 	CPED_CONFIG_FLAG_UseOverrideFootstepPtFx = 421,
 * 	CPED_CONFIG_FLAG_DisableVehicleCombat = 422,
 * 	_CPED_CONFIG_FLAG_0xFE401D26 = 423,
 * 	CPED_CONFIG_FLAG_FallsLikeAircraft = 424,
 * 	_CPED_CONFIG_FLAG_0x2B42AE82 = 425,
 * 	CPED_CONFIG_FLAG_UseLockpickVehicleEntryAnimations = 426,
 * 	CPED_CONFIG_FLAG_IgnoreInteriorCheckForSprinting = 427,
 * 	CPED_CONFIG_FLAG_SwatHeliSpawnWithinLastSpottedLocation = 428,
 * 	CPED_CONFIG_FLAG_DisableStartEngine = 429,
 * 	CPED_CONFIG_FLAG_IgnoreBeingOnFire = 430,
 * 	CPED_CONFIG_FLAG_DisableTurretOrRearSeatPreference = 431,
 * 	CPED_CONFIG_FLAG_DisableWantedHelicopterSpawning = 432,
 * 	CPED_CONFIG_FLAG_UseTargetPerceptionForCreatingAimedAtEvents = 433,
 * 	CPED_CONFIG_FLAG_DisableHomingMissileLockon = 434,
 * 	CPED_CONFIG_FLAG_ForceIgnoreMaxMeleeActiveSupportCombatants = 435,
 * 	CPED_CONFIG_FLAG_StayInDefensiveAreaWhenInVehicle = 436,
 * 	CPED_CONFIG_FLAG_DontShoutTargetPosition = 437,
 * 	CPED_CONFIG_FLAG_DisableHelmetArmor = 438,
 * 	_CPED_CONFIG_FLAG_0xCB7F3A1E = 439,
 * 	_CPED_CONFIG_FLAG_0x50178878 = 440,
 * 	CPED_CONFIG_FLAG_PreventVehExitDueToInvalidWeapon = 441,
 * 	CPED_CONFIG_FLAG_IgnoreNetSessionFriendlyFireCheckForAllowDamage = 442,
 * 	CPED_CONFIG_FLAG_DontLeaveCombatIfTargetPlayerIsAttackedByPolice = 443,
 * 	CPED_CONFIG_FLAG_CheckLockedBeforeWarp = 444,
 * 	CPED_CONFIG_FLAG_DontShuffleInVehicleToMakeRoom = 445,
 * 	CPED_CONFIG_FLAG_GiveWeaponOnGetup = 446,
 * 	CPED_CONFIG_FLAG_DontHitVehicleWithProjectiles = 447,
 * 	CPED_CONFIG_FLAG_DisableForcedEntryForOpenVehiclesFromTryLockedDoor = 448,
 * 	CPED_CONFIG_FLAG_FiresDummyRockets = 449,
 * 	CPED_CONFIG_FLAG_PedIsArresting = 450,
 * 	CPED_CONFIG_FLAG_IsDecoyPed = 451,
 * 	CPED_CONFIG_FLAG_HasEstablishedDecoy = 452,
 * 	CPED_CONFIG_FLAG_BlockDispatchedHelicoptersFromLanding = 453,
 * 	CPED_CONFIG_FLAG_DontCryForHelpOnStun = 454,
 * 	_CPED_CONFIG_FLAG_0xB68D3EAB = 455,
 * 	CPED_CONFIG_FLAG_CanBeIncapacitated = 456,
 * 	_CPED_CONFIG_FLAG_0x4BD5EBAD = 457,
 * 	CPED_CONFIG_FLAG_DontChangeTargetFromMelee = 458,
 * };
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {EPedConfigFlags} configFlag
 * @param {boolean} flag
 */
export function setPedConfigFlag(ped: PedIndex, configFlag: EPedConfigFlags | number, flag: boolean): void {
	const setPedConfigFlag_result = Citizen.invokeNative<void>('0x0428AFDCAA63B06E', ped, configFlag, flag);
	return setPedConfigFlag_result;
}