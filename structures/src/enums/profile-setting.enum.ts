export enum EProfileSetting {
	ProfileActionAutoAim,
	ProfileYaxisInversion,
	ProfileControllerVibration,
	ProfileControllerSensitivity,
	ProfileControllerSixaxisHeli = 5,
	ProfileControllerSixaxisBike,
	ProfileControllerSixaxisBoat,
	ProfileControllerSixaxisReload,
	ProfileControllerSixaxisMission,
	ProfileControllerSixaxisActivity,
	ProfileControllerSixaxisAftertouch,
	ProfileControllerControlConfig,
	ProfileControllerSniperZoom = 17,
	ProfileVoiceThruSpeakers = 100,
	ProfileVoiceMuted,
	ProfileVoiceVolume,
	ProfileDisplaySubtitles = 203,
	ProfileDisplayRadarMode,
	ProfileDisplayHudMode,
	ProfileDisplayLanguage,
	ProfileDisplayGps,
	ProfileDisplayAutosaveMode,
	ProfileDisplayHandbrakeCam,
	ProfileControllerCinematicShooting = 211,
	ProfileDisplaySafezoneSize,
	ProfileDisplayGamma,
	ProfileDisplayCameraHeight = 220,
	ProfileDiaplayBigRadar,
	ProfileDiaplayBigRadarNames,
	ProfileAudioSfxLevel = 300,
	ProfileAudioMusicLevel,
	ProfileAudioVoiceOutput,
	ProfileAudioGpsSpeech,
	ProfileAudioHighDynamicRange,
	ProfileAudioSpeakerOutput,
	ProfileAudioMusicLevelInMp,
	ProfileAudioInteractiveMusic,
	ProfileAudioDialogueBoost,
	ProfileAudioVoiceSpeaker,
	SaveMigrationTransactionIdWarning = 501,
	SaveMigrationTransactionId,
	ProfileFeedPhone = 800,
	ProfileFeedStats,
	ProfileFeedCrew,
	ProfileFeedFriends,
	ProfileFeedSocial,
	ProfileFeedStore,
	ProfileFeedTooltip,
	ProfileFeedDelay,
	TickerJohnMarstonIsAvailable = 850,
	GamerPlayedLastGen = 865, // Indicates if the player has played last gen, 1 - 360, 3 - ps3.
	GamerHasSpecialeditionContent, // Indicates if the player is entitled to special edition content
	ProfileFacebookUpdates = 900,
	RosWentDownNotNet,
	FacebookPostedBoughtGame,
	PrologueComplete,
	FacebookPostedAllVehiclesDriven,
	EulaVersion,
	TosVersion = 907,
	PrivacyVersion,
	JobActivityIdChar0, // Id of the UGC activity started so we know if the player has pulled the plug.
	JobActivityIdChar1, // Id of the UGC activity started so we know if the player has pulled the plug.
	JobActivityIdChar2, // Id of the UGC activity started so we know if the player has pulled the plug.
	JobActivityIdChar3, // Id of the UGC activity started so we know if the player has pulled the plug.
	JobActivityIdChar4, // Id of the UGC activity started so we know if the player has pulled the plug.
	FreemodePrologueCompleteChar0, // Returns a value !=0 if the prologue was done.
	FreemodePrologueCompleteChar1, // Returns a value !=0 if the prologue was done.
	FreemodePrologueCompleteChar2, // Returns a value !=0 if the prologue was done.
	FreemodePrologueCompleteChar3, // Returns a value !=0 if the prologue was done.
	FreemodePrologueCompleteChar4, // Returns a value !=0 if the prologue was done.
	MpFlushPosixtimeHigh32, // s64 value for the last mp successful profile stats flush.
	MpFlushPosixtimeLow32,
	MpCloud0PosixtimeHigh32, // s64 value for the last mp successful cloud save.
	MpCloud0PosixtimeLow32,
	MpCloud1PosixtimeHigh32, // s64 value for the last mp successful cloud save.
	MpCloud1PosixtimeLow32,
	MpCloud2PosixtimeHigh32, // s64 value for the last mp successful cloud save.
	MpCloud2PosixtimeLow32,
	MpCloud3PosixtimeHigh32, // s64 value for the last mp successful cloud save.
	MpCloud3PosixtimeLow32,
	MpCloudPosixtimeHigh32 = 931, // s64 value for the last mp successful cloud save.
	MpCloudPosixtimeLow32,
	MpAwdCreatorRacesDone,
	MpAwdCreatorDmDone,
	MpAwdCreatorCtfDone,
	MpCreatorRacesSaved,
	MpCreatorDmSaved,
	MpCreatorCtfSaved,
	SpChopMissionComplete,
	FreemodeStrandProgressionStatusChar0,
	FreemodeStrandProgressionStatusChar1,
	MpCameraZoomOnFoot = 950,
	MpCameraZoomInVehicle,
	MpCameraZoomOnBike,
	MpCameraZoomInBoat,
	MpCameraZoomInAircraft,
	MpCameraZoomInHeli,
}