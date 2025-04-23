# Software Requirements Specification
## For The Wayback Machine

Version 0.0.05          
Prepared by Mr. Kruskie  


Table of Contents
=================
* [Revision History](#revision-history)
* 1 [Introduction](#1-introduction)
  * 1.1 [Document Purpose](#11-document-purpose)
  * 1.2 [Product Scope](#12-product-scope)
  * 1.3 [Definitions, Acronyms and Abbreviations](#13-definitions-acronyms-and-abbreviations)
  * 1.4 [References](#14-references)
  * 1.5 [Document Overview](#15-document-overview)
* 2 [Product Overview](#2-product-overview)
  * 2.1 [Product Perspective](#21-product-perspective)
  * 2.2 [Product Functions](#22-product-functions)
  * 2.3 [Product Constraints](#23-product-constraints)
  * 2.4 [User Characteristics](#24-user-characteristics)
  * 2.5 [Assumptions and Dependencies](#25-assumptions-and-dependencies)
  * 2.6 [Apportioning of Requirements](#26-apportioning-of-requirements)
* 3 [Requirements](#3-requirements)
  * 3.1 [External Interfaces](#31-external-interfaces)
    * 3.1.1 [User Interfaces](#311-user-interfaces)
    * 3.1.2 [Hardware Interfaces](#312-hardware-interfaces)
    * 3.1.3 [Software Interfaces](#313-software-interfaces)
  * 3.2 [Functional](#32-functional)
  * 3.3 [Quality of Service](#33-quality-of-service)
    * 3.3.1 [Performance](#331-performance)
    * 3.3.2 [Security](#332-security)
    * 3.3.3 [Reliability](#333-reliability)
    * 3.3.4 [Availability](#334-availability)
  * 3.4 [Compliance](#34-compliance)
  * 3.5 [Design and Implementation](#35-design-and-implementation)
    * 3.5.1 [Installation](#351-installation)
    * 3.5.2 [Distribution](#352-distribution)
    * 3.5.3 [Maintainability](#353-maintainability)
    * 3.5.4 [Reusability](#354-reusability)
    * 3.5.5 [Portability](#355-portability)
    * 3.5.6 [Cost](#356-cost)
    * 3.5.7 [Deadline](#357-deadline)
    * 3.5.8 [Proof of Concept](#358-proof-of-concept)
* 4 [Verification](#4-verification)
* 5 [Appendixes](#5-appendixes)

## Revision History
| Name          | Date       | Reason For Changes     | Version |
|---------------|------------|-------------------------|---------|
| J. Kruskie    | 2025-04-14 | Initial draft completed | 0.1     |


## 1. Introduction  
This document provides a comprehensive Software Requirements Specification (SRS) for **The Wayback Machine**, a desktop application designed to preserve and showcase previously developed student projects. The application will function as an interactive launcher and archival platform, allowing users to explore, view, and play past games created by students.

The system aims to support educational transparency, celebrate student achievements, and serve as a motivational and historical reference for current and future students. Users will be able to download and launch student-developed games, view project screenshots, read descriptions, and learn more about the creators behind each project.

This document outlines the purpose, scope, and functionality of the application, as well as its design constraints, user characteristics, assumptions, and dependencies. It serves as a reference for both development and evaluation of the software product.


### 1.1 Document Purpose  
The purpose of this Software Requirements Specification (SRS) is to provide a clear and detailed description of the functional and non-functional requirements for **The Wayback Machine**. This document serves as the foundation for all stages of development, guiding students through the planning, implementation, and testing phases of the project.

The intended audience includes student developers, instructors, project stakeholders, and any collaborators involved in the design or review of the software. By using this SRS, students will better understand the project goals, expected features, technical specifications, and constraints, ensuring that development remains focused and aligned with the intended outcome.


### 1.2 Product Scope  
This SRS describes the requirements for **The Wayback Machine**, Version 0.1, a desktop application designed to archive, present, and launch past student-created games and projects. The software serves as both a game launcher and a digital portfolio viewer, combining interactive functionality with a clean, visual interface that displays game-related media, student information, and download/play options.

The primary objective of The Wayback Machine is to celebrate and preserve student work in an accessible, engaging format. It offers benefits such as historical archiving of programming achievements, inspiration for future students, and a practical way to showcase the outcomes of project-based learning in a technical education environment.

The software aligns with educational goals by promoting student ownership of learning, reinforcing digital literacy, and supporting a culture of recognition and reflection. This SRS covers the full system as a standalone application and does not reference a broader platform or external vision document.

### 1.3 Definitions, Acronyms and Abbreviations

- **Web API**: A set of HTTP-based interfaces that allow communication between software applications, typically used to fetch or send data over the internet.
- **Desktop Application**: A software program that runs locally on a user’s computer, as opposed to web-based software which runs in a browser.
- **Git**: A distributed version control system used to track changes in source code during software development.
- **GitHub**: A cloud-based platform built around Git that facilitates code sharing, collaboration, and version control.
- **Process**: In the context of operating systems, a process is an instance of a running program, including its current activity and state.
- **JSON (JavaScript Object Notation)**: A lightweight data-interchange format that is easy to read and write for humans and easy to parse and generate for machines.
- **Launcher**: A software interface that provides access to a list of programs or games, often used in gaming environments to select and start titles.
- **Repository**: A centralized location where data is stored and managed, especially for source code in Git-based systems.
- **Executable (.exe)**: A type of computer file that runs a program when opened, typically used in Windows environments.
- **User Interface (UI)**: The visual part of the software with which users interact, including menus, buttons, images, and layout.

### 1.4 References

- **Classroom Branding Materials**  
  Google Drive Folder containing logos, style guides, and other design assets relevant to the visual design of The Wayback Machine.  
  [https://drive.google.com/drive/folders/1aLHFI0o9KDtMZ5ypmvFvLwBj8ZgwUkKx?usp=drive_link](https://drive.google.com/drive/folders/1aLHFI0o9KDtMZ5ypmvFvLwBj8ZgwUkKx?usp=drive_link)

- **Code Dojo Classroom Website**  
  Public-facing website for the Computer Programming program at the Bay-Arenac ISD Career Center. Contains examples of past projects and student work.  
  [https://codedojo.me](https://codedojo.me)


### 1.5 Document Overview  
The remainder of this document is organized to provide a complete description of the software requirements for **The Wayback Machine**.  

- **Section 2: Product Overview** describes the context, major features, constraints, target users, and dependencies of the software.  
- **Section 3: Requirements** outlines all detailed technical and functional requirements, including interface specifications, performance expectations, and implementation considerations.  
- **Section 4: Verification** describes how the software will be tested to ensure it meets the defined requirements.  
- **Section 5: Appendixes** includes any supplementary information or supporting documentation relevant to the project.

This structure ensures that developers, instructors, and stakeholders can easily navigate and understand the system’s purpose, design, and implementation roadmap.

## 2. Product Overview  
This section provides the background and context for **The Wayback Machine**, detailing the key factors that influence its design and functionality. It outlines the product’s role, main features, constraints, intended user base, and environmental assumptions.

The purpose of this section is to help stakeholders and developers understand the reasoning behind the requirements defined in Section 3. By clearly presenting the product’s overall scope and positioning, this section lays the foundation for building a system that aligns with user needs and instructional goals.

### 2.1 Product Perspective  
**The Wayback Machine** is a standalone product designed to run on a modified 1UP Rampage arcade cabinet. It serves as a dedicated kiosk-style application for viewing and launching past student-developed games, functioning independently of any existing school systems.

The system consists of two main components:

- **Web API**: This backend service connects to a database to store and manage all relevant data, including student information, game metadata, and associated media (e.g., screenshots, descriptions).
- **Launcher Application**: Installed on the arcade machine, this desktop-based interface fetches live data from the Web API and presents users with a curated, navigable gallery of past projects. Users can select and download games on demand, view related information, and launch games directly from the interface.

These components interact seamlessly to deliver real-time updates and access to archived student work. Although the software operates as a unified experience, the logical separation of backend and frontend allows for maintainability, scalability, and potential future extension to other platforms.

### 2.2 Product Functions  

**The Wayback Machine** will perform the following core functions:

- **Web API Functions**  
  - Store and serve a curated archive of student-created games.  
  - Manage a backend database containing metadata for each game, including title, description, student author(s), and creation date.  
  - Handle image storage for game screenshots or promotional artwork.  
  - Provide structured JSON responses when queried by the launcher application.

- **Launcher Application Functions**  
  - Periodically fetch updated game and student information from the Web API in JSON format.  
  - Maintain a local offline copy of the most recent data to support limited functionality without internet access.  
  - Display an interactive interface allowing users to browse and search through past projects.  
  - Download and extract games on demand.  
  - Launch selected games directly from within the application.

These functions support the overarching goal of providing a seamless, engaging experience for browsing, learning about, and revisiting past student projects.

### 2.3 Product Constraints  

- **User Interface Constraints**  
  The launcher must support interaction via arcade hardware, including multiple joysticks and buttons, as well as a hidden keyboard and mouse for administrative use. All primary user actions should be accessible through the arcade controls to ensure an authentic arcade experience.

- **Hardware Constraints**  
  The software will run on a modified 1UP Rampage arcade cabinet. As such, the launcher must be optimized for a fixed screen resolution and hardware limitations of the cabinet’s internal PC or microcomputer.

- **Design Constraints**  
  The user interface must incorporate classroom branding elements, including logo placement, fonts, and color schemes consistent with official Code Dojo style guides.

- **Offline Functionality**  
  The launcher must be able to function with reduced capability in offline mode using the most recently stored JSON data from the Web API.

- **API Format**  
  The launcher must be compatible with the JSON data structure provided by the Web API. All communication between the launcher and the API must be lightweight and efficient to minimize bandwidth and processing needs.

- **Game Compatibility**  
  Downloaded games must be able to run in a Windows environment and be launched from the application without manual user configuration.

### 2.4 User Characteristics  

The Wayback Machine is designed for three primary user classes, each with different usage needs and technical expertise:

- **General Users (Students, Visitors, Guests)**  
  - **Frequency of Use**: Occasional to frequent  
  - **Technical Expertise**: Low  
  - **Access Level**: Public, restricted to browsing and launching games  
  - **Description**: These users interact with the launcher to view past projects and play archived student-created games. They rely solely on the arcade controls and do not have access to administrative functions. The system must be intuitive and visually engaging for this group.

- **Instructors / Program Administrators**  
  - **Frequency of Use**: Moderate  
  - **Technical Expertise**: Moderate to high  
  - **Access Level**: Administrative (may use hidden keyboard/mouse)  
  - **Description**: These users may update configuration settings, perform troubleshooting, or reset the launcher if needed. They require access to more advanced controls or tools not visible to general users.

- **Student Developers (Project Contributors)**  
  - **Frequency of Use**: Infrequent (during development or testing)  
  - **Technical Expertise**: Moderate  
  - **Access Level**: None through the launcher, but relevant to the API/backend  
  - **Description**: Students contributing projects will indirectly interact with the system by submitting games and associated media to be uploaded into the database. Their technical involvement is outside the launcher itself but is important to the ongoing usefulness of the platform.

The most critical group to satisfy is the **general user**, as the launcher is intended to provide a seamless and engaging experience to showcase student work.

### 2.5 Assumptions and Dependencies  

The following assumptions and dependencies may impact the functionality or implementation of The Wayback Machine:

- **GitHub Integration**  
  It is assumed that GitHub will be used as the primary storage location for student projects. Each game will be stored in its own repository, and the repository URL will be saved in the database.

- **Git Installation**  
  The launcher will depend on Git being installed on the host machine in order to clone repositories from GitHub when users select a game to download.

- **Internet Access**  
  The system assumes periodic internet access is available for updating the game list, cloning repositories, and retrieving metadata from the Web API. While the launcher will support offline mode with cached data, core functionality such as downloading games requires connectivity.

- **API Availability**  
  The Web API must be hosted and accessible by the launcher. Any outage or misconfiguration of the API could prevent the launcher from retrieving updated game information.

- **Database Structure**  
  It is assumed the backend database will be properly maintained and structured to support queries for game metadata, images, and repository links. Any changes to the database schema may require launcher or API adjustments.

- **Windows Operating System**  
  It is assumed the arcade machine will run a compatible version of Windows capable of executing .exe game files and supporting the necessary tools (e.g., Git, Python, .NET).

### 2.6 Apportioning of Requirements  

The software requirements for **The Wayback Machine** are divided between two main components: the Web API and the Launcher Application. The table below summarizes which software element is responsible for each major function.

| Function                                          | Web API | Launcher |
|--------------------------------------------------|---------|----------|
| Store student game metadata in database          | ✅      |          |
| Store GitHub repository URLs                     | ✅      |          |
| Store and serve game-related images              | ✅      |          |
| Provide JSON responses to launcher requests      | ✅      |          |
| Retrieve and display game/project information    |         | ✅        |
| Maintain offline cache of JSON data              |         | ✅        |
| Download games via Git clone                     |         | ✅        |
| Launch executable game files                     |         | ✅        |
| Apply classroom branding in UI                   |         | ✅        |
| Support input from arcade controls               |         | ✅        |

Some future enhancements (such as analytics tracking or user feedback features) may require further allocation or modification of these responsibilities. For now, each requirement is clearly associated with one of the two core software elements.

## 3. Requirements  
This section outlines the complete set of software requirements for **The Wayback Machine**. Each requirement is written to be specific, verifiable, and actionable to guide development and enable effective testing.

Requirements are organized into the following categories:
- **External Interfaces**: Details on how the software will interact with users, hardware, and other software components.
- **Functional Requirements**: Core behaviors and system functionality.
- **Quality of Service Requirements**: Expectations for performance, security, reliability, and availability.
- **Compliance Requirements**: Standards and policies the system must adhere to.
- **Design and Implementation Constraints**: Installation, maintainability, and distribution requirements that affect development and deployment.

Each requirement is intended to clearly describe expected behavior and technical constraints, ensuring both the launcher and Web API components can be properly implemented and validated.

### 3.1 External Interfaces  

This section defines the external interfaces for **The Wayback Machine**, including user inputs, hardware controls, software communication protocols, and data formats. These interfaces are essential for enabling communication between the launcher, the Web API, and the end users.

| Interface Name           | Type           | Source/Destination                  | Format/Details                                             |
|--------------------------|----------------|-------------------------------------|------------------------------------------------------------|
| User Input (Arcade)      | Input          | Arcade joysticks & buttons          | Mapped to launcher navigation and game selection           |
| Admin Input              | Input          | Hidden keyboard and mouse           | Used for configuration, troubleshooting, and maintenance   |
| Web API Requests         | Input/Output   | Launcher ↔ API                      | HTTP GET/POST, JSON format                                 |
| Game Downloads           | Output/Input   | GitHub ↔ Launcher                   | Git protocol, local file extraction                        |
| Game Executables         | Output         | Launcher → OS                       | .exe files launched as subprocesses                        |
| Image/Media Rendering    | Output         | Launcher UI                         | PNG/JPG files retrieved from Web API and cached locally    |

The following subsections will further detail:
- [3.1.1 User Interfaces](#311-user-interfaces)  
- [3.1.2 Hardware Interfaces](#312-hardware-interfaces)  
- [3.1.3 Software Interfaces](#313-software-interfaces)


#### 3.1.1 User Interfaces  

The Wayback Machine includes a custom user interface designed for use with arcade-style controls and aligned with classroom branding standards. The interface is optimized for full-screen display on a 1UP Rampage arcade cabinet.

**Launcher UI Characteristics:**
- Full-screen, arcade-style layout with large, navigable elements.
- Grid or carousel-style game browser showcasing project thumbnails and titles.
- Detail view for selected games showing:
  - Game title and description
  - Student name(s)
  - Game screenshot(s)
  - Download and launch options
- Offline indicator banner when disconnected from the Web API.

**GUI Style & Branding:**
- Follows classroom branding guidelines as outlined in the Code Dojo style guide.
- Includes consistent use of the Code Dojo logo, color palette, and fonts.
- Visual emphasis on showcasing student creativity and school identity.

**Usability Requirements:**
- All major actions must be accessible via arcade controls (joystick + buttons).
- Navigation should be smooth and intuitive for non-technical users.
- Game launching must be possible in three or fewer user interactions.

**Convenience Requirements:**
- Hidden keyboard/mouse support for administrative troubleshooting.
- Automatic caching of data and images to support offline mode.
- Error messages displayed in simple language with retry or fallback options.

Details of the layout, icons, and screen structure will be defined in a separate user interface specification document.

#### 3.1.2 Hardware Interfaces  

**The Wayback Machine** is designed to operate on a modified 1UP Rampage arcade cabinet, interfacing directly with several physical input and output devices. The launcher must recognize and respond to the following hardware components:

**Input Devices:**
- **Joysticks**: Used for navigating the game library and menu selections.
- **Arcade Buttons**: Mapped to actions such as selecting a game, returning to the main menu, launching a game, and confirming prompts.
- **Keyboard and Mouse (hidden/internal use)**: Used by instructors or administrators for maintenance, troubleshooting, or manual override. These should not interfere with normal arcade operation.

**Output Devices:**
- **Monitor/Display**: The software must support a fixed resolution display (typically 1280x720 or 1920x1080) used by the arcade cabinet.
- **Audio Output (optional)**: If games include audio, the system must support playback through the cabinet’s built-in speakers.

**Interaction Layer:**
- Input polling or key mapping libraries (e.g., SDL, GLFW, or OS-level key mapping) will interpret joystick and button input.
- All hardware interfaces must be mapped correctly in the launcher configuration file or during installation to ensure responsive control.

**Fallback Controls:**
- The system must default to keyboard/mouse if arcade inputs are not detected during boot, allowing continued use and testing outside of the cabinet.

#### 3.1.3 Software Interfaces  

The Wayback Machine integrates with multiple software components to support its functionality. These include the operating system, database, GitHub repositories, and a RESTful Web API. The following outlines the software interfaces used:

---

**Operating System**  
- **Windows 10/11**  
  The launcher application is designed to run on Windows, using native system calls to launch `.exe` files and access system-level Git functionality.

---

**Database**  
- **Relational Database (PostgreSQL or MySQL)**  
  The Web API will interface with a relational database that stores game metadata, student information, image URLs, and GitHub repository links.  
  Direct database access is only performed by the API layer.

---

**Web API**  
- **Custom RESTful API**  
  The launcher communicates with the API using HTTP GET requests to fetch game data and image URLs.  
  All responses are returned in JSON format and parsed by the launcher.  
  The API may be hosted locally or remotely and must be accessible via the arcade machine.

**Example JSON Response Format**  
\`\`\`json
{
  "projects": [
    {
      "title": "Pixel Racer",
      "description": "A 2D racing game with a custom track editor.",
      "authors": ["Jane Smith"],
      "image_url": "https://cdn.codedojo.me/images/pixelracer.jpg",
      "repo_url": "https://github.com/janesmith/pixel-racer"
    }
  ]
}
\`\`\`

---

**Version Control Interface**  
- **Git (v2.30 or later)**  
  The launcher uses Git to clone project repositories from GitHub using the \`repo_url\` stored in the database.  
  Git must be installed on the arcade machine and accessible via the system path.

---

**Asset and Media Handling**  
- Project images (JPG/PNG) are downloaded from the URLs provided in the API response and cached locally.  
- The launcher must be able to display these images and continue using them in offline mode if needed.

---

**Implementation Constraints**  
- API endpoints and GitHub repository URLs must be configurable via a local \`.env\` or config file.  
- If the API schema changes, the launcher must be updated accordingly to reflect any new or modified data fields.


### 3.2 Functional  

The functional requirements of The Wayback Machine define the core behaviors the software must exhibit in response to user actions and system events. These include:

- The launcher must retrieve and display a list of games from the Web API.
- The launcher must store a local JSON cache for offline use.
- The launcher must allow users to navigate the interface using arcade controls.
- The launcher must allow users to select and view details about a game, including:
  - Title
  - Description
  - Author(s)
  - Screenshot(s)
- The launcher must allow users to download games using Git.
- The launcher must launch downloaded games from the interface.
- The Web API must serve a JSON object containing game metadata and image URLs.
- The Web API must support updating and retrieving entries in the game archive.
- The system must prevent the same game from being downloaded multiple times unnecessarily.
- The launcher must gracefully handle errors (e.g., API offline, missing game repo).
- Administrative users must be able to modify launcher settings using a keyboard/mouse.

---

### 3.3 Quality of Service  

The following quality-related requirements apply to The Wayback Machine:

- The launcher must be responsive and load the game list within 2 seconds under normal conditions.
- Cached data must persist between launcher restarts.
- The UI must remain usable with only arcade controls (no mouse required).
- Error messages must be user-friendly and non-technical in language.
- The system must be usable in offline mode with the most recently fetched data.
- The API and launcher must both handle up to 100 games in the archive without performance degradation.
- API responses must conform to a consistent and predictable JSON schema.
- The system must be designed to minimize data usage during API requests.

#### 3.3.1 Performance  

Performance requirements for The Wayback Machine are minimal on the launcher side, but more critical on the backend (Web API) side. Specific expectations are as follows:

- The launcher must load the game list and related metadata from the local cache or Web API in under 2 seconds under normal conditions.
- The launcher must remain responsive to user input at all times, including when fetching data or downloading games.
- Game performance is not the responsibility of The Wayback Machine software and is considered out of scope. Any performance issues within the games themselves are the responsibility of the student developers.
- The Web API must respond to requests for game metadata within 500 milliseconds on a stable network connection.
- The system must support up to 100 archived games without noticeable slowdown during list rendering or API response generation.

These performance expectations are in place to ensure the system feels smooth and responsive to end users while maintaining scalability as the number of archived projects grows.

#### 3.3.2 Security  

The Wayback Machine does not implement authentication or security controls at this time.

- The Web API will be publicly accessible without authentication. It will serve read-only data related to student projects, including game metadata and image URLs.
- No sensitive or personally identifiable information (PII) will be stored or transmitted by the system.
- The launcher will not include any form of login or user identity management.
- Any future version that introduces write access or administrative controls to the API should revisit and expand upon this section.

As the system is designed for internal educational use and contains only public student-facing content, security is not a primary concern for this version.

#### 3.3.3 Reliability  

The Wayback Machine is expected to operate reliably under normal conditions, with minimal risk of failure.

- The launcher must be capable of displaying the game list and launching games without crashing or becoming unresponsive.
- The system must handle missing or malformed data (e.g., broken API response or missing image files) without failing entirely.
- If a game fails to download or launch, the system must display an error message and allow the user to return to the main menu without restarting the application.

---

#### 3.3.4 Availability  

The system must be available for use whenever the host machine is powered on.

- The launcher application will be configured to automatically start on system boot, ensuring consistent availability on the arcade machine.
- The Web API will be hosted on a server that also automatically restarts the service on system boot.
- No advanced availability strategies (such as load balancing, failover, or horizontal scaling) will be implemented for the Web API in this version.
- There is no requirement for 24/7 uptime, but the system should recover from restarts without manual intervention.
  
### 3.4 Compliance  

There are no specific compliance requirements for The Wayback Machine at this time.

- The system is intended for internal educational use and does not handle financial, legal, or sensitive personal data.
- There are no regulatory standards, audit trails, or data formatting rules that must be followed.
- No report formatting, data naming conventions, or accounting procedures are required for this project.

If future versions of the system expand into broader deployment or handle sensitive data, this section should be revisited.

### 3.5 Design and Implementation

#### 3.5.1 Installation  

Installation constraints and requirements for The Wayback Machine are as follows:

- **Web API**  
  - The Web API will be hosted on an Ubuntu Server virtual machine.  
  - It is expected to run inside a Docker container for ease of deployment and management.  
  - Docker and Docker Compose must be installed and properly configured on the host VM.  
  - API configuration (e.g., database credentials, environment variables) will be managed via a `.env` file or Docker Compose environment definitions.

- **Launcher Application**  
  - The launcher will be installed directly on the arcade machine, which runs Windows 10 or 11.  
  - The application may be set to auto-launch on system startup using a shortcut in the Windows Startup folder or a scheduled task.  
  - Required dependencies (e.g., Git, any runtime libraries) must be pre-installed on the arcade machine.  
  - Local configuration for the launcher (e.g., API endpoint, caching options) will be stored in a JSON or config file within the installation directory.

#### 3.5.2 Distribution  

The Wayback Machine does not require complex distribution across multiple physical locations.

- The Web API will be hosted on a single virtual machine accessible over a local or public network.
- The launcher will run on a single arcade machine located in the classroom.
- All data retrieval occurs over HTTP(S), and there are no distributed processing components.
- No load balancing, replication, or remote client deployment is required for this version.

---

#### 3.5.3 Maintainability  

Maintainability has been considered in the architecture of The Wayback Machine:

- The Web API is modular, with separate components for routing, database access, and data formatting.
- Code for the launcher is expected to follow clear modular structures, separating UI logic, API communication, and local caching.
- Configuration values (e.g., API endpoint, cache timeout, branding options) are stored in editable config files to allow updates without modifying source code.
- Both the API and launcher should include clear inline comments and README documentation for future developers.

---

#### 3.5.4 Reusability  

- The Web API is designed to be reusable for other educational or archival projects by adjusting database entries and media paths.
- The launcher could be repurposed for other content collections by swapping out the JSON schema and UI branding.
- Both systems are built with minimal hardcoded values, allowing for future adaptation with minimal changes.

#### 3.5.5 Portability  

- The Web API is containerized using Docker, making it highly portable across any system that supports Docker and Docker Compose.
- The launcher is currently designed for Windows and may require minor modifications to run on other operating systems.
- Porting the launcher to Linux or macOS would require replacing Windows-specific components, such as `.exe` launching logic.
- All configuration values are stored in external config files, reducing dependency on machine-specific settings.

---

#### 3.5.6 Cost  

- There are no direct costs associated with the development or deployment of The Wayback Machine.
- All software components are built using open-source technologies (e.g., Git, Docker, PostgreSQL).
- The only potential costs are related to optional hosting infrastructure (e.g., VPS for Web API), which is currently covered internally by the school or class.

---

#### 3.5.7 Deadline  

- The project is expected to reach a functional proof-of-concept stage by **[Insert Desired Date Here]**.
- Final delivery, including testing and deployment to the arcade machine, is targeted for completion by **[Insert Final Delivery Date Here]**.
- Timeline milestones may include:
  - Web API setup and database schema: Week 1
  - Launcher UI and API integration: Week 2–3
  - Game download/launch functionality: Week 4
  - Testing, polish, and deployment: Week 5

Specify schedule for delivery of the software product.

#### 3.5.8 Proof of Concept  
A working prototype will demonstrate all core features, including fetching game data from the API, caching for offline mode, and launching downloaded games. The proof of concept will validate system feasibility before full deployment.

## 4. Verification  

The verification process for The Wayback Machine will ensure that the system meets all defined functional and quality requirements. Each major feature or system behavior will be tested through manual and automated methods to confirm it works as intended.

Verification activities will include:

- **Launcher Functionality**
  - Confirm the launcher can retrieve and parse game metadata from the Web API.
  - Verify that the game list is displayed correctly, including titles, descriptions, and images.
  - Test navigation and selection using arcade controls.
  - Validate that games can be downloaded via Git and launched successfully.
  - Confirm local JSON caching functions properly and supports offline mode.

- **Web API**
  - Test API responses for correct structure and valid data.
  - Verify that the API serves updated metadata when the database is modified.
  - Ensure the API responds within the required performance window (under 500ms).

- **System Integration**
  - Validate full communication loop: database → API → launcher → game.
  - Simulate failures (e.g., API unavailable, broken repo URL) to verify error handling.
  - Confirm automatic startup behavior of both launcher and API on system reboot.

Each requirement defined in Section 3 will be reviewed against these tests to verify that the software performs as expected under realistic conditions. Any failed test will be logged and addressed before final deployment.

## 5. Appendixes  

This section includes supplementary information that supports the development and understanding of The Wayback Machine. Appendices may include diagrams, configuration examples, environment setup instructions, or additional reference material.

### Appendix A: Sample `.env` File for Web API  
```
DB_HOST=localhost  
DB_PORT=5432  
DB_USER=admin  
DB_PASS=securepassword  
DB_NAME=waybackmachine  
```

### Appendix B: Arcade Control Mappings  
- Joystick Up/Down/Left/Right → Menu Navigation  
- Button A → Select / Confirm  
- Button B → Back / Cancel  
- Start Button → Launch Game  
- Hidden Key: `Esc` → Exit Launcher

Additional appendices can be added as needed throughout the project.
