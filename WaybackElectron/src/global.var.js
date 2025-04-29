let hasSidebarAnimated = false;
let gamePath = "C:/Users/admin/Documents/Games/Deep Down - The Lost City of Atlantis/Final - Windows/launch.exe"

export function getSidebarAnimated() { return hasSidebarAnimated }
export function setSidebarAnimated(to) { hasSidebarAnimated = to }

export function launchGameForTesting() {

    const gameExecutablePath = "C:/Users/admin/Documents/Games/Deep Down - The Lost City of Atlantis/Final - Windows/launch.exe";

    try {
        spawn(gameExecutablePath, [], {
            detached: true,
            stdio: 'ignore',
        }).unref();

        return { success: true };
    } catch (error) {
        console.error('Failed to launch game:', error);
        return { success: false, error: error.message };
    }

}