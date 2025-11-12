/**
 * AUDIO:SET_AUDIO_FLAG
 *
 * 0xCFBD89D2F1F18961

 * 
 * Generic interface to toggle audio functionality, with auto-reset on script termination and support for multiple script threads
 * 
 * Possible flag names:
 * "ActivateSwitchWheelAudio"
 * "AllowAmbientSpeechInSlowMo"
 * "AllowCutsceneOverScreenFade"
 * "AllowForceRadioAfterRetune"
 * "AllowPainAndAmbientSpeechToPlayDuringCutscene"
 * "AllowPlayerAIOnMission"
 * "AllowPoliceScannerWhenPlayerHasNoControl"
 * "AllowRadioDuringSwitch"
 * "AllowRadioOverScreenFade"
 * "AllowScoreAndRadio"
 * "AllowScriptedSpeechInSlowMo"
 * "AvoidMissionCompleteDelay"
 * "DisableAbortConversationForDeathAndInjury"
 * "DisableAbortConversationForRagdoll"
 * "DisableBarks"
 * "DisableFlightMusic"
 * "DisableReplayScriptStreamRecording"
 * "EnableHeadsetBeep"
 * "ForceConversationInterrupt"
 * "ForceSeamlessRadioSwitch"
 * "ForceSniperAudio"
 * "FrontendRadioDisabled"
 * "HoldMissionCompleteWhenPrepared"
 * "IsDirectorModeActive"
 * "IsPlayerOnMissionForSpeech"
 * "ListenerReverbDisabled"
 * "LoadMPData"
 * "MobileRadioInGame"
 * "OnlyAllowScriptTriggerPoliceScanner"
 * "PlayMenuMusic"
 * "PoliceScannerDisabled"
 * "ScriptedConvListenerMaySpeak"
 * "SpeechDucksScore"
 * "SuppressPlayerScubaBreathing"
 * "WantedMusicDisabled"
 * "WantedMusicOnMission"
 * 
 * -------------------------------
 * No added flag names between b393d and b573d, including b573d.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} flagName
 * @param {boolean} enabled
 */
export function setAudioFlag(flagName: string, enabled: boolean): void {
	const setAudioFlag_result = Citizen.invokeNative<void>('0xCFBD89D2F1F18961', flagName, enabled);
	return setAudioFlag_result;
}