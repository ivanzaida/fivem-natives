export enum EPauseMenuState {
	PmInactive, // not initialized at all
	PmStartingUp = 5, // in the process of starting up (loading assets, etc. May enter this state during a restart)
	PmRestarting = 10, // restarting (or has a restart queued)
	PmReady = 15, // ready to have commands sent to it
	PmInStore = 20, // in the store screen
	PmInScMenu = 25, // in social club screen
	PmShuttingDown = 30, // is closing down (example, waiting up to 3 seconds for streaming to finish)
	PmInVideoeditor = 35, // in video editor
}