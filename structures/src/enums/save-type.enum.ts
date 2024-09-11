export enum ESaveType {
	StatSavetypeDefault, // Default save where the event is not identifiable. Disabled
	StatSavetypeStuntjump, // Deferred Profile Flush
	StatSavetypeCheaterChange, // Deferred Profile Flush
	StatSavetypeImmediateFlush, // Cloud save, Profile Stats Flush
	StatSavetypeCommerceDeposit, // Disabled
	StatSavetypeExploits, // Deferred Profile Flush
	StatSavetypeStore, // Disabled
	StatSavetypeEndCode,
	StatSavetypeAmbient = 7, // Cloud Only, Deferred Profile Flush
	StatSavetypeCash, // Disabled
	StatSavetypeEndGamerSetup, // Profile Flush Only
	StatSavetypeEndShopping, // Profile Flush Only
	StatSavetypeEndGarage, // Cloud Only, Same as STAT_SAVETYPE_SCRIPT_MP_GLOBALS
	StatSavetypeEndMission, // Cloud Only, Deferred Profile Flush
	StatSavetypeEndAtm, // Disabled
	StatSavetypePreStartstore, // Profile Flush, Cloud Save
	StatSavetypeScriptMpGlobals, // Cloud Only
	StatSavetypePrologue, // Cloud Only
	StatSavetypeContacts, // Disabled
	StatSavetypeStartMatch, // Disabled
	StatSavetypeStartSession, // Cloud Only
	StatSavetypeInteractionMenu, // Cloud Only, Deferred Profile Flush
	StatSavetypeJoinSc, // Disabled
	StatSavetypeAmbProfileAwardTracker, // Cloud Only, Deferred Flush
	StatSavetypePhotos, // Deferred Profile Flush
	StatSavetypeWeaponDrop, // Disabled
	StatSavetypeRankup, // Cloud Only, Deferred Profile Flush
	StatSavetypeEndMissionCreator, // Cloud Only, Deferred Profile Flush
	StatSavetypeCritical, // Critical save types.
	StatSavetypeEndCreateNewchar = 27, // Profile Flush, Cloud Save
	StatSavetypeEndMatch, // Profile Flush, Cloud Save
	StatSavetypeEndSession, // Profile Flush, Cloud Save
	StatSavetypeDeleteChar, // Profile Flush, Cloud Save
	StatSavetypeMaxNumber,
}