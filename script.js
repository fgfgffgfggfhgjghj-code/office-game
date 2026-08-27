// Timezone data mapping
const timezones = {
    nyc: { offset: -5, name: 'New York' },
    london: { offset: 0, name: 'London' },
    paris: { offset: 1, name: 'Paris' },
    tokyo: { offset: 9, name: 'Tokyo' },
    sydney: { offset: 11, name: 'Sydney' },
    dubai: { offset: 4, name: 'Dubai' },
    la: { offset: -8, name: 'Los Angeles' },
    singapore: { offset: 8, name: 'Singapore' }
};

/**
 * Format time as HH:MM:SS
 * @param {Date} date - The date object to format
 * @returns {string} Formatted time string
 */
function formatTime(date) {
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}

/**
 * Get current time in a specific timezone
 * @param {number} offset - UTC offset in hours
 * @returns {string} Formatted time string for the timezone
 */
function getTimeInTimezone(offset) {
    const now = new Date();
    const utc = now.getTime() + now.getTimezoneOffset() * 60000;
    const timezoneTime = new Date(utc + offset * 3600000);
    return formatTime(timezoneTime);
}

/**
 * Update all clock displays
 */
function updateClocks() {
    for (const [id, timezone] of Object.entries(timezones)) {
        const element = document.getElementById(id);
        if (element) {
            element.textContent = getTimeInTimezone(timezone.offset);
        }
    }
}

/**
 * Initialize the clock system
 */
function initClock() {
    updateClocks(); // Update immediately
    setInterval(updateClocks, 1000); // Update every second
}

// Start the clock when DOM is ready
document.addEventListener('DOMContentLoaded', initClock);
