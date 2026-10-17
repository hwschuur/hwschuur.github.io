## ADDED Requirements

### Requirement: Toggle button visible in masthead
The site SHALL display a dark/light mode toggle button in the masthead navigation on all pages.

#### Scenario: Button is present on every page
- **WHEN** any page on the site loads
- **THEN** the masthead SHALL contain a visible toggle button with a sun or moon icon indicating the current mode

#### Scenario: Button icon reflects current mode
- **WHEN** the site is in light mode
- **THEN** the toggle button SHALL display a moon icon (indicating dark mode is available)
- **WHEN** the site is in dark mode
- **THEN** the toggle button SHALL display a sun icon (indicating light mode is available)

### Requirement: Dark mode activates correct color scheme
When dark mode is active, the site SHALL apply a dark color scheme that provides sufficient contrast for all text, links, code blocks, masthead, footer, and sidebar elements.

#### Scenario: Dark mode colors applied
- **WHEN** the user activates dark mode
- **THEN** the background color SHALL change to a dark tone and text SHALL change to a light tone

#### Scenario: Light mode colors applied
- **WHEN** the user activates light mode
- **THEN** the site SHALL revert to the default "dirt" skin colors

### Requirement: User preference persisted across sessions
The site SHALL remember the user's dark/light mode preference between page loads and browser sessions using `localStorage`.

#### Scenario: Preference saved on toggle
- **WHEN** the user clicks the toggle button
- **THEN** the chosen preference SHALL be saved to `localStorage` under a key (e.g., `theme`)

#### Scenario: Preference restored on return visit
- **WHEN** a user returns to the site with a previously saved preference
- **THEN** the correct mode SHALL be applied before the first paint (no flash of wrong theme)

### Requirement: OS dark mode preference respected on first visit
On a user's first visit (no saved preference), the site SHALL default to dark mode if the OS `prefers-color-scheme: dark` media query is active.

#### Scenario: First visit with OS dark mode
- **WHEN** a user visits the site for the first time AND their OS is set to dark mode
- **THEN** the site SHALL load in dark mode automatically

#### Scenario: First visit with OS light mode
- **WHEN** a user visits the site for the first time AND their OS is set to light mode (or no preference)
- **THEN** the site SHALL load in light mode (dirt skin)

### Requirement: No flash of wrong theme on load
The site SHALL apply the correct theme before the browser renders visible content, eliminating a flash of the wrong theme.

#### Scenario: Correct theme applied before render
- **WHEN** a page loads with a saved or OS-derived theme preference
- **THEN** the page SHALL render in the correct theme from the first visible frame with no flicker

### Requirement: Graceful degradation without JavaScript
If JavaScript is disabled or unavailable, the site SHALL remain fully functional and display in its default light mode.

#### Scenario: No JS environment
- **WHEN** JavaScript is disabled in the browser
- **THEN** the site SHALL render in light (dirt) mode without errors
- **THEN** no toggle button SHALL be visible or non-functional
